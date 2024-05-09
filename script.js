function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;
    let result;

    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(([^)]+)\)/g, (match, angle) => {
            const radians = parseFloat(angle) * (Math.PI / 180);
            return `Math.sin(${radians})`;
        });
        expression = expression.replace(/cos\(([^)]+)\)/g, (match, angle) => {
            const radians = parseFloat(angle) * (Math.PI / 180);
            return `Math.cos(${radians})`;
        });
        expression = expression.replace(/tan\(([^)]+)\)/g, (match, angle) => {
            const radians = parseFloat(angle) * (Math.PI / 180);
            return `Math.tan(${radians})`;
        });

        // Convert base 10 log inputs to Math.log10
        expression = expression.replace(/log\(([^)]+)\)/g, (match, value) => {
            const num = parseFloat(value);
            return `Math.log10(${num})`;
        });

        // Convert square root inputs to Math.sqrt
        expression = expression.replace(/√/g, `Math.sqrt`);
        expression = expression.replace(/\^/g, `**`);

        // Replace pi and e with their respective values from Math
        expression = expression.replace(/π/g, 'Math.PI');
        expression = expression.replace(/e/g, 'Math.E');

        //for modulo
        expression = expression.replace(/(\d+)%/g, '($1 / 100)');

       // This regular expression finds a number followed by the factorial operator (!)
       expression = expression.replace(/(\d+)!/g, (match, num) => {
          let n = parseInt(num, 10);
          let result = 1;
    
          // Calculate factorial
          while (n > 1) {
          result *= n;
          n--;
        }
       // Return the calculated factorial
       return result;
        });



        // Evaluate the expression
        result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    const display = document.getElementById('display');
    // Check if the display value is '0'
    if (display.value === '0') {
        display.value = '√(';
    } else {
        display.value += '√(';
    }
}

function base10Log() {
    const display = document.getElementById('display');
    // Check if the display value is '0'
    if (display.value === '0') {
        display.value = 'log(';
    } else {
        display.value += 'log(';
    }
}

function pi() {
    const display = document.getElementById('display');
    // Check if the display value is '0'
    if (display.value === '0') {
        display.value = 'π';
    } else {
        display.value += 'π';
    }
}

function e() {
    const display = document.getElementById('display');
    // Check if the display value is '0'
    if (display.value === '0') {
        display.value = 'e';
    } else {
        display.value += 'e';
    }
}

function power() {
    const display = document.getElementById('display');
    // Check if the display value is '0'
    if (display.value === '0') {
        display.value = '^(';
    } else {
        display.value += '^(';
    }
}

function calculateModulo() {
    const display = document.getElementById('display');
    // Check if the display value is '0'
    if (display.value === '0') {
        display.value = '%';
    } else {
        display.value += '%';
    }
}

function calculateFactorial() {
    const display = document.getElementById('display');
    // Check if the display value is '0'
    if (display.value === '0') {
        display.value = '!';
    } else {
        display.value += '!';
    }
}

function addToDisplay(value) {
    const display = document.getElementById('display');
    
    // Remove the initial '0' from the display if the user starts typing
    if (display.value === '0') {
        display.value = '';
    }
    
    // Add the new value to the display
    display.value += value;
}

function addDecimal() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    // Determine the last number in the expression
    const lastNumberMatch = currentValue.match(/([+\-*/])?(\d*\.?\d*)$/);
    const lastNumber = lastNumberMatch ? lastNumberMatch[2] : '';
    
    // Add a decimal point if it doesn't already exist in the last number
    if (!lastNumber.includes('.')) {
        if (currentValue === '0') {
            display.value = '0.';
        } else {
            display.value += '.';
        }
    }
}


function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '0'; // Reset the display to '0' when clearing
}



















