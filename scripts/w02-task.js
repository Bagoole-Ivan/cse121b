/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/* Declaring variables for Name, Date, Time and picture */

/* Step 2 - Variables */
const fullName = 'Bagoole Ivan';

let currentYear = Date.now;

let profilePicture = 'E:\BYU class\Fall 23\cse121b\images\rsz_ivan_bagoole_-_pic.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('Name');

var elem = document. getElementById("button"); elem. innerHTML = "Enable"; 


/*Above I'm changing the innerHTML of an element.*/

let foodElement = document.getElementById('food');

let yearElement = document.querySelector('#year');

let imageElement = document.getElementById('image');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

document.getElementById('yearElement').textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */
food[4] = {'Meal ': 'Rice ' , 'Source ' : 'Beef ' , 'Desert ' : 'Ice Cream'};





