/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ivan Bagoole",
    photo: src = "E:\BYU class\Fall 23\cse121b\images\ivan_bagoole.jpg",
    favoriteFoods: ["Rice","Pork","chicken","Potatoes"],
    hobbies: ["Football","Eating","Singing","Movies"],
    placesLived: [],

}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Kibuli Kampala",
        length: "2 months",
    },
    {
        place: "Walukuba Jinja",
        length: "9 months",
    },
    {
        place: "Buwenge Jinja",
        length: "2 years",
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').textContent = myProfile.photo;

/* Favorite Foods List*/
document.querySelector('#favorite-foods').textContent = myProfile.favoriteFoods;

/* Hobbies List */
document.querySelector('#hobbies').textContent = myProfile.hobbies;

/* Places Lived DataList */
document.querySelector('#places-lived').textContent = myProfile.placesLived;

