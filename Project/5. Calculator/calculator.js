// Get display and buttons
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Loop through all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "AC") {
      currentInput = "";
      display.innerText = "0";

    } else if (value === "⌫") {
      // remove last character
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || "0";

    } else if (value === "=") {
      try {
        // Replace symbols to JS operators
        let expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
        currentInput = eval(expression).toString();
        display.innerText = currentInput;
      } catch {
        display.innerText = "Error";
      }

    } else {
      // Add number or operator to input
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});