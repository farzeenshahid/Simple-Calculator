let currentInput = '';
let currentResult = 0;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        document.getElementById('display').value = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function exponentialFunction() {
    const exponent = document.getElementById("exponent");

    // Check if the input is valid
    if (!isNaN(exponent)) {
        // Calculate 10^y
        const result = Math.pow(10, exponent);

        // Display the result on the screen
        display.value = result;
    } else {
        // Handle invalid input
        display.value = 'Invalid input';
    }
}
function clearDisplay() {
    currentInput = '';
    currentResult = 0;
    document.getElementById('display').value = '0';
}

function deleteElement() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
