/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/* Declaring variables for Name, Date, Time and picture */

/* Step 2 - Variables */
const fullName = 'Bagoole Ivan';

const currentYear = new Date().getfullYear();


imageElement.setAttribute('src', profilePicture);

profilePicture.src = "E:\BYU class\Fall 23\cse121b\images\ivan_bagoole.png";

var profilePicture = document.getElementById('image');


/* Step 3 - Element Variables */
let nameElement = document.getElementsById("name");


/*Above I'm changing the innerHTML of an element.*/

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */

nameElement.innerHTML = "<strong>" + fullName + "</strong>";

document.getElementById('yearElement').textContent = currentYear;


/* Step 5 - Array */
let foodArray = ['Meal ', 'Rice ' , 'Source ' , 'Beef ' , 'Desert ' , 'Ice Cream'];
foodElement.textContent = foodArray;

foodElement.innerHTML += `<br>${foodArray}`;

yearElement.textContent = currentYear;




