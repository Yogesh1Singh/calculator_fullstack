let display = document.getElementById("display");

// Function to add value to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to calculate result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error!";
    }
}

// Handle keyboard input
document.addEventListener("keydown", function(event) {
    let key = event.key;
    if ("0123456789+-*/.".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }
});
