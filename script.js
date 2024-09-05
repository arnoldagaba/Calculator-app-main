// Variables to store the input values and operator
let currentInput = ''; // The number being typed in
let previousInput = ''; // The number before the operator
let operator = ''; // The chosen operator
let result = null; // Stores the result

// Get the display element
const display = document.querySelector('.output');

// Function to format numbers with a thousands separator
function formatNumberWithComma(number) {
    return new Intl.NumberFormat('en-US').format(number);
}

// Function to update the display
function updateDisplay(value) {
    display.value = value ? formatNumberWithComma(value) : '';
}

// Function to append a number or decimal point
function appendNumber(number) {
    // Prevent multiple decimal points
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay(currentInput);
}

// Function to choose the operator
function chooseOperator(op) {
    if (currentInput === '') return; // Don't allow operator selection without a number
    if (previousInput !== '') {
        computeResult(); // If there's already an input, compute the result before changing the operator
    }
    operator = op;
    previousInput = currentInput; // Store the first operand
    currentInput = ''; // Reset for the second operand
    updateDisplay(previousInput);
}

// Function to compute the result
function computeResult() {
    if (previousInput === '' || currentInput === '') return; // Avoid calculating without full input

    const firstOperand = parseFloat(previousInput);
    const secondOperand = parseFloat(currentInput);

    // Perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand === 0 ? 'Error' : firstOperand / secondOperand;
            break;
        default:
            return;
    }

    previousInput = '';
    currentInput = result.toString();
    updateDisplay(result);
}

// Function to delete the last input character (like backspace)
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

// Function to reset the calculator
function resetClaculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
    result = null;
    updateDisplay('');
}

/* // Event listener for theme switch (optional feature for theme toggle)
const themeSlider = document.getElementById('theme-slider');
themeSlider.addEventListener('input', () => {
    document.body.className = `theme-${themeSlider.value}`;
}); */
