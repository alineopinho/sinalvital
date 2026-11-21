(() => {
  const start = document.getElementById('quiz-start');
  const status = document.getElementById('quiz-status');
  const form = document.getElementById('quiz-form');
  const progress = document.getElementById('quiz-progress');
  const meter = document.getElementById('quiz-meter');
  const heading = document.getElementById('quiz-question');
  const options = document.getElementById('quiz-options');
  const check = document.getElementById('quiz-check');
  const feedback = document.getElementById('quiz-feedback');
  const next = document.getElementById('quiz-next');
  const result = document.getElementById('quiz-result');
  const scoreHeading = document.getElementById('quiz-score');
  const restart = document.getElementById('quiz-restart');
  let questions;
  let index = 0;
  let score = 0;

  function showQuestion() {
    const question = questions[index];
    progress.textContent = `Pergunta ${index + 1} de ${questions.length}`;
    meter.value = index;
    heading.textContent = question.pergunta;
    options.replaceChildren();
    options.disabled = false;
    for (const [value, answer] of question.alternativas.entries()) {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'answer';
      radio.value = value;
      radio.required = true;
      label.append(radio, answer);
      options.append(label);
    }
    feedback.textContent = '';
    delete feedback.dataset.correct;
    check.hidden = false;
    next.hidden = true;
    heading.focus();
  }

  function begin() {
    index = 0;
    score = 0;
    meter.max = questions.length;
    start.hidden = true;
    result.hidden = true;
    form.hidden = false;
    showQuestion();
  }

  start.addEventListener('click', async () => {
    start.disabled = true;
    status.textContent = 'Carregando perguntas…';
    try {
      const response = await fetch('../data/quiz.json');
      if (!response.ok) throw new Error('Perguntas indisponíveis');
      questions = await response.json();
      if (!questions.length) throw new Error('Quiz vazio');
      status.textContent = '';
      begin();
    } catch {
      status.textContent = location.protocol === 'file:'
        ? 'Abra o site por um servidor local para carregar o quiz.'
        : 'Não foi possível carregar as perguntas. Tente novamente.';
    } finally {
      start.disabled = false;
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (options.disabled) return;
    const answer = new FormData(form).get('answer');
    if (answer === null) return;
    const question = questions[index];
    const correct = Number(answer) === question.correta;
    if (correct) score++;
    options.disabled = true;
    meter.value = index + 1;
    feedback.dataset.correct = correct;
    feedback.textContent = `${correct ? 'Resposta correta.' : 'Veja a resposta esperada.'} ${question.explicacao}`;
    next.textContent = index + 1 === questions.length ? 'Ver resultado' : 'Continuar';
    next.hidden = false;
    next.focus();
    check.hidden = true;
  });

  next.addEventListener('click', () => {
    index++;
    if (index < questions.length) {
      showQuestion();
      return;
    }
    form.hidden = true;
    result.hidden = false;
    scoreHeading.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    scoreHeading.focus();
  });

  restart.addEventListener('click', begin);
})();
