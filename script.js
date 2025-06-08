let currentInput = ''; // Variable to store current input
let currentResult = ''; // Variable to store the result after pressing '='
let isResult = false; // Flag to track if the result is displayed

// Function to update the display screen
function updateDisplay(value) {
  const screen = document.getElementById('result');
  screen.value = value;
  screen.scrollLeft = screen.scrollWidth; // Automatically scroll to the rightmost part
}


// Function to handle number and operator button clicks
function appendToScreen(value) {
  // If the result is displayed, clear the input before appending
  if (isResult) {
    currentInput = ''; // Reset input if the result is shown
    isResult = false; // Reset the flag
  }
  currentInput += value;
  updateDisplay(currentInput);
}

// Function to clear the screen
function clearScreen() {
  currentInput = '';
  currentResult = '';
  isResult = false;
  updateDisplay(currentInput);
}

// Function to handle the backspace button
document.getElementById('backspace').addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
});

// Function to calculate the square of a number
function squareNumber() {
  const screen = document.getElementById('result');
  let currentValue = screen.value;
  if (currentValue) {
    currentValue = parseFloat(currentValue);
    screen.value = currentValue * currentValue;
    currentInput = screen.value;
  }
}

// Function to calculate the square root of a number
function squareRoot() {
  const screen = document.getElementById('result');
  let currentValue = screen.value;
  if (currentValue) {
    currentValue = parseFloat(currentValue);
    if (currentValue >= 0) {
      screen.value = Math.sqrt(currentValue);
      currentInput = screen.value;
    } else {
      screen.value = "Error"; // Handle negative numbers for square root
      currentInput = '';
    }
  }
}

// Function to calculate the result of the current expression
function calculateResult() {
  const screen = document.getElementById('result');
  let currentValue = screen.value;
  if (currentValue) {
    try {
      currentResult = eval(currentValue); // Use eval to evaluate the expression
      currentResult = currentResult.toLocaleString(); // Format with commas
      screen.value = currentResult;
      currentInput = currentResult.toString(); // Convert to string for further calculation
      isResult = true; // Set the flag to true since result is calculated
    } catch (error) {
      screen.value = "Error"; // Handle invalid expressions
      currentInput = '';
    }
  }
}
