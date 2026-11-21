const $ = (id) => document.getElementById('glossary-' + id);
const filters = $('filters');
const search = $('search');
const category = $('category');
const results = $('results');
const panel = $('details');
const heading = $('term');
const reset = $('reset');
const status = $('status');
const announcement = $('announcement');
const desktop = matchMedia('(min-width: 48rem)');

let terms = [];
let selectedButton;
let announcementTimer;

function normalize(value) {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('pt-BR').trim();
}

function showStatus(message, announce = true) {
  status.textContent = message;
  clearTimeout(announcementTimer);
  if (announce) {
    announcementTimer = setTimeout(() => {
      announcement.textContent = message;
    }, 450);
  }
}

function create(tag, text) {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  return element;
}

function closeDetails(restoreFocus = false) {
  if (!selectedButton) return;
  const origin = selectedButton;
  origin.setAttribute('aria-expanded', 'false');
  origin.removeAttribute('aria-controls');
  selectedButton = undefined;
  panel.hidden = true;
  $('layout').append(panel);
  $('video').replaceChildren();
  if (restoreFocus) origin.focus();
}

function placePanel() {
  if (!selectedButton) return;
  const destination = desktop.matches ? $('layout') : selectedButton.closest('li');
  if (panel.parentElement === destination) return;
  const focused = panel.contains(document.activeElement) ? document.activeElement : null;
  destination.append(panel);
  focused?.focus({ preventScroll: true });
}

function showMedia(term) {
  const illustration = $('illustration');
  const picture = term.ilustracao;
  illustration.textContent = 'Ilustração ainda indisponível.';
  if (picture?.autorizada && picture.src && picture.alt && picture.credito) {
    const figure = create('figure');
    const image = create('img');
    image.src = new URL(picture.src, new URL("../", document.baseURI));
    image.alt = picture.alt;
    figure.append(image, create('figcaption', picture.credito));
    illustration.replaceChildren(figure);
  }

  const container = $('video');
  const media = term.videoLibras;
  container.textContent = 'Vídeo em Libras ainda indisponível.';
  if (media?.validado && media.autorizado && media.src && media.titulo && media.credito) {
    const video = create('video');
    video.src = new URL(media.src, new URL("../", document.baseURI));
    video.controls = true;
    video.preload = 'none';
    video.setAttribute('aria-label', media.titulo);
    container.replaceChildren(create('p', media.titulo), video, create('p', media.credito));
  }
}

function openDetails(term, button) {
  if (selectedButton === button) {
    closeDetails(true);
    return;
  }

  closeDetails();
  selectedButton = button;
  button.setAttribute('aria-expanded', 'true');
  button.setAttribute('aria-controls', panel.id);
  heading.textContent = term.termo;
  $('definition').textContent = term.definicao;

  const source = $('source');
  if (term.fonte?.titulo && term.fonte.url) {
    const link = create('a', term.fonte.titulo);
    link.href = term.fonte.url;
    source.replaceChildren('Fonte: ', link);
  } else {
    source.textContent = 'Conteúdo provisório. Fonte ainda a confirmar.';
  }

  showMedia(term);
  placePanel();
  panel.hidden = false;
  heading.focus();
}

function renderResults(announce = true) {
  const query = normalize(search.value);
  const visible = terms.filter((term) =>
    normalize(term.termo).includes(query) && (!category.value || category.value === term.categoria)
  );

  // Keep the open card and its button when they still match the filters.
  const visibleIds = new Set(visible.map((term) => term.id));
  for (const item of results.children) item.hidden = !visibleIds.has(item.dataset.id);
  if (selectedButton?.closest('li').hidden) {
    const focusWasInDetails = panel.contains(document.activeElement);
    closeDetails();
    if (focusWasInDetails) search.focus();
  }

  reset.hidden = !query && !category.value;
  if (visible.length === 0) {
    showStatus('Nenhum termo encontrado. Tente outra palavra ou escolha outra categoria.', announce);
  } else {
    showStatus(visible.length === 1 ? '1 termo encontrado.' : `${visible.length} termos encontrados.`, announce);
  }
}

async function loadGlossary() {
  try {
    const response = await fetch('../data/glossario.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    terms = await response.json();
    terms.sort((a, b) => a.termo.localeCompare(b.termo, 'pt-BR'));

    const categories = [...new Set(terms.map((term) => term.categoria))];
    categories.sort((a, b) => a.localeCompare(b, 'pt-BR'));
    for (const name of categories) category.add(new Option(name, name));

    for (const term of terms) {
      const item = create('li');
      item.dataset.id = term.id;
      const card = create('div');
      card.className = 'glossary-card';
      const button = create('button', 'Ver detalhes');
      button.type = 'button';
      button.className = 'glossary-button';
      button.setAttribute('aria-label', 'Ver detalhes de ' + term.termo);
      button.setAttribute('aria-expanded', 'false');
      button.addEventListener('click', () => openDetails(term, button));
      card.append(create('h3', term.termo), create('p', term.categoria), button);
      item.append(card);
      results.append(item);
    }

    filters.disabled = false;
    renderResults(false);
  } catch {
    const message = location.protocol === 'file:'
      ? 'Abra o site por um servidor local para carregar o glossário.'
      : 'Não foi possível carregar o glossário. Recarregue a página para tentar novamente.';
    showStatus(message, location.hash === '#glossario');
  }
}

search.addEventListener('input', () => renderResults());
category.addEventListener('change', () => renderResults());
reset.addEventListener('click', () => {
  search.value = '';
  category.value = '';
  search.focus();
  renderResults();
});
$('close').addEventListener('click', () => closeDetails(true));
panel.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDetails(true);
});
desktop.addEventListener('change', placePanel);

loadGlossary();
