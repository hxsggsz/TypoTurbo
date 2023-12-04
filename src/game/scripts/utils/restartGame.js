/**
 *
 * @param {NodeListOf<HTMLInputElement>} inputs - the current input
 *
 */
export function restartGame(inputs) {
  inputs.forEach((input) => {
    input.value = '';
  });

  const firstInput = inputs[0];
  firstInput.focus();
}