/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(add1, add2);

}

document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

const subtractNumbers = function (){
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.getElementById("difference").value = subtract(subtract1, subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = function (){
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.getElementById("product").value = multiply(factor1, factor2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.getElementById("quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.getElementById("year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => (number*2));
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.reduce(numbersArray.map(number => (number*2)));
