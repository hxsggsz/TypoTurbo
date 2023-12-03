import './styles.scss'
import '../styles/base.scss'
import { Select } from "domhelper.js"

const inputs = new Select("input").getAllResults()

function restartGame() {
	inputs.forEach((input) => {
		input.value = ""
	})

	const firstInput = inputs[0]
	firstInput.focus()
}

/**
 * 
 * @param {HTMLInputElement} currentInput - the current input
 * 
 */
function onInputChange(currentInput, index) {
	const nextInput = inputs[index + 1];
	if (currentInput.value.length && nextInput) {
		nextInput.focus();
		return;
	}

	restartGame()
}

inputs.forEach((input, index) => {
  input.addEventListener("keydown", () => onInputChange(input, index))
})
