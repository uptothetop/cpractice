import { Counter } from './counter.class.js';
import { Renderer } from './renderer.class.js';

const counter = new Counter(3);
const renderer = new Renderer('.count');

const answerEl = document.getElementById('answer');
const buttonEl = document.getElementById('check');



/** App initialization, will be run on the first time */
const init = () => {
  answerEl.value = '';
  renderer.clear();

  counter.createChain();
  // Render first block
  const number1 = counter.chain[0][1];
  const number2 = counter.chain[1][1];
  const operand = counter.chain[1][0];
  renderer.appendFirstBlock(operand, number1, number2);

  // Render other blocks
  for (let i = 2; i < counter.chain.length; i++) {
    const opr = counter.chain[i][0];
    const num = counter.chain[i][1];
    renderer.appendBlock(opr, num);
  }
}

const checkAnswer = () => {
  const answer = answerEl.value;

  if (answer == counter.value) {
    alert('Верно!')
  } else {
    alert(`Неверно, правильный ответ = ${counter.value}`);
  }
  init();
}

buttonEl.addEventListener('click', checkAnswer);
init();