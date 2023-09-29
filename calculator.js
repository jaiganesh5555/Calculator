let inn = document.getElementById("calculatorInput");
let equal = document.getElementById("Equal");
let outP = document.getElementById("outp");
let one = document.getElementById("One");
let two = document.getElementById("Two");
let three = document.getElementById("Three");
let four = document.getElementById("Four");
let five = document.getElementById("Five");
let six = document.getElementById("Six");
let seven = document.getElementById("Seven");
let eight = document.getElementById("Eight");
let nine = document.getElementById("Nine");
let zero = document.getElementById("Zero");
let plus = document.getElementById("Plus");
let minus = document.getElementById("Minus");
let multiply = document.getElementById("Multiply");
let divide = document.getElementById("Divide");
let Clear = document.getElementById("clear");
let dot = document.getElementById("Dot");
let Delete = document.getElementById("delete");

let a;
let operator = "";
let c = 0;
let buttonclicked = false;

function setInputValue(value) {
    inn.textContent = value.toString();
}

one.addEventListener('click', () => setInputValue(inn.textContent + "1"));
two.addEventListener('click', () => setInputValue(inn.textContent + "2"));
three.addEventListener('click', () => setInputValue(inn.textContent + "3"));
four.addEventListener('click', () => setInputValue(inn.textContent + "4"));
five.addEventListener('click', () => setInputValue(inn.textContent + "5"));
six.addEventListener('click', () => setInputValue(inn.textContent + "6"));
seven.addEventListener('click', () => setInputValue(inn.textContent + "7"));
eight.addEventListener('click', () => setInputValue(inn.textContent + "8"));
nine.addEventListener('click', () => setInputValue(inn.textContent + "9"));
zero.addEventListener('click', () => setInputValue(inn.textContent + "0"));
dot.addEventListener('click', () => setInputValue(inn.textContent + "."));

function operator1(op) {
    c += 1;
    if (c === 1) {
        a = parseFloat(inn.textContent);
        operator = op;
        setInputValue("");
    } else if (c >= 1 && buttonclicked) {
        let b = parseFloat(inn.textContent);
        operator = op;
        setInputValue("");
    } else if (c >= 1 && !buttonclicked) {
        let b = parseFloat(inn.textContent);
        operator = op;
        setInputValue("");

    }

}


plus.addEventListener('click', () => operator1("+"));
minus.addEventListener('click', () => operator1("-"));
multiply.addEventListener('click', () => operator1("*"));
divide.addEventListener('click', () => operator1("/"));

// Define functions for basic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multipli(a, b) {
    return a * b;
}

function deleteLastChar() {
    inn.textContent = inn.textContent.slice(0, -1);
}

function clearcontent() {
    outP.textContent = "";
    setInputValue("");
}

function divid(a, b) {
    if (b === 0) {
        alert("Error: Division by zero!");
        return NaN;
    }
    return a / b;
}

function calculateResult() {
    let b = parseFloat(inn.textContent);
    if (operator === "+") {
        a = add(a, b);
    } else if (operator === "-") {
        a = subtract(a, b);
    } else if (operator === "*") {
        a = multipli(a, b);
    } else if (operator === "/") {
        a = divid(a, b);
    }
    outP.textContent = a;



}

equal.addEventListener('click', calculateResult);
Clear.addEventListener('click', () => {
    outP.textContent = "";
    setInputValue("");
    a = 0;
    c = 0;
    buttonclicked = true;
});

Delete.addEventListener('click', () => {
    inn.textContent = inn.textContent.slice(0, -1);
});

function handleKeyboardInput(e) {
    if ((e.key >= '0' && e.key <= '9') || e.key === ".") {
        inn.textContent = inn.textContent + e.key;
    }

    if (e.key === '=' || e.key === 'Enter') calculateResult();
    if (e.key === 'Backspace') deleteLastChar();
    if (e.key === 'Escape') clearcontent();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        operator1(e.key);

    }
}

const btns = document.querySelectorAll('button');
btns.forEach(button => {
    button.classList.add('trans');

})
document.addEventListener('keydown', handleKeyboardInput);