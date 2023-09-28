/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
const add = function (number1, number2){
    return number1 + number2;
}

const addNumbers = function (){
    let add1 = number(document.getElementById("add1").value);
    let add2 = number(document.querySelector("#add2").value);
    document.getElementById("sum").innerHTML = add(add1, add2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;
}

const subtractNumbers = function (){
    let subtract1 = number(document.getElementById("subtract1").value);
    let subtract2 = number(document.querySelector("#subtract2").value);
    document.getElementById("difference").innerHTML = subtract(subtract1, subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = function (){
    let factor1 = number(document.getElementById("factor1").value);
    let factor2 = number(document.querySelector("#factor2").value);
    document.getElementById("product").innerHTML = multiply(factor1, factor2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let dividend = number(document.getElementById("dividend").value);
    let divisor = number(document.querySelector("#divisor").value);
    document.getElementById("quotient").innerHTML = divide(dividend, divisor);
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
let numbersArray2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];
document.querySelector("#multiplied").innerHTML = numbersArray2;
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray2.reduce((sum, number) => sum + number);
