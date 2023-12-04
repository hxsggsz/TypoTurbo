import './styles.scss';
import '../styles/base.scss';
import { Select } from 'domhelper.js';

const inputs = new Select('input').getAllResults();

function restartGame() {
  inputs.forEach((input) => {
    input.value = '';
  });

  const firstInput = inputs[0];
  firstInput.focus();
}

/**
 *
 * @param {HTMLInputElement} currentInput - the current input
 * @param {number} index - the index of inputs
 *
 */
function onInputChange(ev, currentInput, index) {
  const nextInput = inputs[index + 1];
  if (currentInput.value.length && nextInput) {
    nextInput.focus();
    return;
  }

  restartGame();
}

function handleKeyDown(ev, currentInput, index) {
  if (ev.key === 'Backspace') {
    const prevInput = inputs[index - 1];
    if (prevInput.value.length) {
      prevInput.focus();
      prevInput.value = '';
    }
  }
}

inputs.forEach((currentInput, index) => {
  currentInput.addEventListener('input', (ev) =>
    onInputChange(ev, currentInput, index)
  );
  currentInput.addEventListener('keydown', (ev) =>
    handleKeyDown(ev, currentInput, index)
  );
});
