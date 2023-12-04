import '../styles/styles.scss';
import '../../styles/base.scss';
import { Select } from 'domhelper.js';
import { restartGame } from './utils/restartGame';

const inputs = new Select('input').getAllResults();

/**
 *
 * @param {NodeListOf<HTMLInputElement>} inputs - all inputs
 * @param {number} index - the index of inputs
 *
 */
export function onInputChange(inputs, index) {
  const nextInput = inputs[index + 1];
  const currentInput = inputs[index];
  
  if (currentInput.value.length && nextInput) {
    nextInput.focus();
    return;
  }

  restartGame(inputs);
}

/**
 *
 * @param {KeyboardEvent} ev - event on keyboard press down
 * @param {HTMLInputElement} inputs - all inputs
 * @param {number} index - the index of inputs
 *
 */
export function deleteInputValue(ev, inputs, index) {
  if (ev.key === 'Backspace') {
    const prevInput = inputs[index - 1];
    if (prevInput.value.length) {
      prevInput.focus();
      prevInput.value = '';
    }
  }
}

inputs.forEach((currentInput, index) => {
  currentInput.addEventListener('input', () => onInputChange(inputs, index));

  currentInput.addEventListener('keydown', (ev) =>
    deleteInputValue(ev, inputs, index)
  );
});
