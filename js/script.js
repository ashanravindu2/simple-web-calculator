const outPut = document.getElementById("output-value");
const history = document.getElementById("history-value");
const operators = document.getElementsByClassName("operator"); //Html collection
const numbers = document.getElementsByClassName("number");

//we cant use for each on HTML collection so we have to convert it to array first

let currentValue = "";
let historyValue = " ";

function updateOutput() {
  outPut.textContent = currentValue;
}

function clearDisplay() {
  currentValue = "";
  historyValue = "";
}

function backspace() {
  currentValue = currentValue.substring(0, currentValue.length - 1);
}

function evaluate() {
  currentValue = currentValue.toString().replace("x", "*");
  if (currentValue === "Error") {
    return "Error";
  }

  try {
    currentValue = eval(currentValue);
  } catch (error) {
    currentValue = "Error";
  }
}

Array.from(operators).forEach((operators) => {
  operators.addEventListener("click", () => {
    switch (operators.id) {
      case "clear":
        clearDisplay();
        break;
      case "negetive":
        console.log("negetive");
        break;
      case "%":
        currentValue += "%";
        break;
      case "/":
        currentValue += "/";
        break;
      case "*":
        currentValue += "x";
        break;
      case "-":
        currentValue += "-";
        break;
      case "+":
        currentValue += "+";
        break;
      case "backspace":
        backspace();
        break;
      case "equals":
        evaluate();
        break;
    }
    updateOutput();
  });
});

Array.from(numbers).forEach((numbers) => {
  numbers.addEventListener("click", () => {
    currentValue += numbers.id;
    updateOutput();
  });
});
