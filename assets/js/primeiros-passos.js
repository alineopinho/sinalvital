(() => {
  const journey = document.querySelector('.learning-view');
  const steps = [...journey.querySelectorAll('[data-step]')];
  const panels = [...journey.querySelectorAll('[data-journey-panel]')];
  const progress = document.getElementById('journey-progress');
  const previous = document.getElementById('journey-previous');
  const next = document.getElementById('journey-next');
  const scenario = document.getElementById('journey-scenario');
  const feedback = document.getElementById('journey-feedback');
  let current = 0;

  function showStep(index, moveFocus = true) {
    if (index < 0 || index >= steps.length) return;
    current = index;
    progress.textContent = `Etapa ${index + 1} de ${steps.length}`;
    panels.forEach((panel, position) => {
      panel.hidden = position !== index;
      if (position === index) steps[position].setAttribute('aria-current', 'step');
      else steps[position].removeAttribute('aria-current');
    });
    previous.disabled = index === 0;
    next.hidden = index === steps.length - 1;
    if (moveFocus) panels[index].querySelector('h3').focus();
  }

  steps.forEach((button, index) => button.addEventListener('click', () => showStep(index)));
  previous.addEventListener('click', () => showStep(current - 1));
  next.addEventListener('click', () => showStep(current + 1));

  const responses = {
    acompanhante: 'Dirija-se primeiro a Júlia. Assim, ela pode indicar sua preferência e decidir como a acompanhante vai participar.',
    julia: 'Essa é a opção adequada. Perguntar diretamente a Júlia permite que ela indique a forma de comunicação que prefere.',
    escrita: 'A escrita pode ser uma opção quando a pessoa a escolhe. Pergunte a Júlia como ela prefere se comunicar antes de começar.',
  };

  scenario.addEventListener('change', () => feedback.replaceChildren());
  scenario.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = new FormData(scenario).get('approach');
    const message = document.createElement('p');
    message.textContent = responses[answer];
    feedback.replaceChildren(message);
  });

  for (const heading of journey.querySelectorAll('[data-journey-panel] h3')) {
    heading.setAttribute('aria-describedby', progress.id);
  }
  showStep(0, false);
  journey.querySelector('.journey-controls').hidden = false;
  journey.querySelector('.journey-actions').hidden = false;
  scenario.hidden = false;
})();
