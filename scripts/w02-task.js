/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/* Declaring variables for Name, Date, Time and picture */

/* Step 2 - Variables */
let fullName = 'Bagoole Ivan';

currentYear = Date.now;

var image = document.getElementById('Placeholder image');

image.src = "E:\BYU class\Fall 23\cse121b\images\ivan_bagoole.png";

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');


/*Above I'm changing the innerHTML of an element.*/

let foodElement = document.getElementById('food');

let yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */

nameElement.innerHTML = "<strong>" + fullName + "</strong>";

document.getElementById('yearElement').textContent = currentYear;


/* Step 5 - Array */
food[4] = {'Meal ': 'Rice ' , 'Source ' : 'Beef ' , 'Desert ' : 'Ice Cream'};





