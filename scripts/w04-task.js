/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ivan Bagoole",
    photos: src = "https://exploreittechnologies.com/wp-content/uploads/2022/03/Bagoole_Ivan-removebg-preview-1.png",
    favoriteFoods: [
        "Rice",
        "Pork",
        "chicken",
        "Potatoes",
        "Beef"
    ],
    hobbies: [
        "Football",
        "Eating",
        "Singing",
        "Movies"
    ],
    placesLived: []

}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
        [
            place = "[Kibuli - Kampala]",
            length = " - 2 months",
        ],
        [    
            place = "  [Walukuba - Jinja]",
            length = " - 9 months",
        ],
        [    
            place = "  [Buwenge - Jinja]",
            length = " - 2 years",
        ]
    );



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").src = myProfile.photos;

/* Favorite Foods List*/
document.getElementById('favorite-foods').textContent = myProfile.favoriteFoods;

/* Hobbies List */
document.querySelector('#hobbies').textContent = myProfile.hobbies;

/* Places Lived DataList */
document.getElementById('places-lived').textContent = myProfile.placesLived;

