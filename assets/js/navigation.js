const skipLink = document.querySelector('.skip-link');

skipLink.addEventListener('click', (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;

  const main = document.getElementById('conteudo');
  main.focus({ preventScroll: true });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;

  const menu = event.target.closest('.disclosure[open]');
  if (!menu) return;

  menu.open = false;
  menu.querySelector('summary').focus();
});
