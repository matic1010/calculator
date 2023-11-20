const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNumber = null;
let secondNumber = null;
let operator = null;

const operate = (op, a, b) => {
  if(op === "+") return add(a, b);
  if(op === "-") return subtract(a, b);
  if(op === "*") return multiply(a, b);
  if(op === "/") return divide(a, b);
}

const opButtons = document.querySelectorAll(".op-button")

opButtons.forEach(button => {
  const op = button.dataset.operator
  button.addEventListener(("click"), () => {
    // if calculation has not been operated yet, do that
    if(operator) {
      const result = operate(operator, firstNumber, secondNumber)
      console.log(result)
      firstNumber = result;
      secondNumber = null;
      operator = null;
    }
    // set the operator
    operator = op
  })
})

const numberButtons = document.querySelectorAll(".number-button")

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(!operator) {
      if(!firstNumber) {
        firstNumber = Number(button.dataset.value)
      } else {
        firstNumber = Number(firstNumber += button.dataset.value)
      }
    } else {
      if(!secondNumber) {
        secondNumber = Number(button.dataset.value)
      } else {
        secondNumber = Number(secondNumber += button.dataset.value)
      }
    }
  })
})

const equalsButton = document.querySelector("#equals")
equalsButton.addEventListener("click", () => {
  if(firstNumber && secondNumber && operator) {
    const result = operate(operator, firstNumber, secondNumber)
    console.log(result)
    firstNumber = result;
    secondNumber = null;
    operator = null;
  }
})