const slider = document.querySelector(".slider");

slider.addEventListener("click", (event) => toggleTheme(event));

function toggleTheme(event) {
  const sliderWidth = slider.offsetWidth;

  document.body.classList.remove("theme1");
  document.body.classList.remove("theme2");
  document.body.classList.remove("theme3");

  if (event.offsetX < sliderWidth / 3) {
    document.body.classList.add("theme1");
  } else if (event.offsetX > sliderWidth * 2 / 3) {
    document.body.classList.add("theme3");
  } else {
    document.body.classList.add("theme2");
  }
}

const screen = document.querySelector(".result");
const keyboard = document.querySelector(".keyboard");

let operands = ["0"];
let operators = [];

keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("numeric")) {
    handleNumericInput(event.target.textContent);
  } else if (event.target.classList.contains("operator")) {
    handleOperatorInput(event.target.textContent);
  } else if (event.target.classList.contains("del")) {
    handleDeleteInput();
  } else if (event.target.classList.contains("reset")) {
    handleReset();
  } else if (event.target.classList.contains("equals")) {
    handleEquals();
  }

  let i = 0;
  let screenText = "";
  while (i < operands.length || i < operators.length) {
    screenText += +operands[i].toString();
    if (i < operators.length) {
      screenText += operators[i];
    }
    i++;
  }
  screen.textContent = screenText;
});

function handleNumericInput(num) {
  if (operators.length === operands.length) {
    operands.push(num);
  } else {
    operands[operands.length - 1] += num;
  }
}

function handleOperatorInput(operator) {
  if (operators.length === operands.length) {
    operators[operators.length - 1] = operator;
  } else {
    operators.push(operator);
  }
}

function handleDeleteInput() {
  if (operators.length === operands.length) {
    operators.pop();
  } else if (operands.length === 1 && operands[0].length === 1) {
    operands[0] = "0";
  } else {
    operands[operands.length - 1] = operands[operands.length - 1].slice(0, -1);
    if (!operands[operands.length - 1]) {
      operands.pop();
    }
  }
}

function handleReset() {
  operands = ["0"];
  operators = [];
}

function handleEquals() {
  while (operands.length > 1) {
    const firstOperand = parseFloat(operands.shift()); // consider prefixing with + to turn into number
    const secondOperand = parseFloat(operands.shift());
    const operator = operators.shift();

    let result;
    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
      case "x":
        result = firstOperand * secondOperand;
        break;
      }

    operands.unshift(result.toString());
  }
}
