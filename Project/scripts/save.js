/* Final Project Tasks */

/* Declaring and initializing global variables */
const templesElement = document.querySelector("#cards");
cardList = [];

/* async displayCards Function*/ 
const displayCards = (cards) => {

    cardList = cards;
    let div = document.getElementById('cards');
  
    cards.forEach(card => {
  
      // - Creates an HTML <article> element
      let article = document.createElement('article');
  
      // - Creates an HTML <h3> element and add the card's cardName property to it
      let h3 = document.createElement('h3');
      h3.innerHTML = card.cardName;
      article.appendChild(h3);
  
      // - Creates an HTML <img> element and add the card's imageUrl property to the src attribute and the card's cardName property to the alt attribute
      let image = document.createElement('img');
      image.setAttribute('src', card.imageUrl);
      article.appendChild(image);
      
      // - Appends the <article> element to the HTML element with an ID of cards
      div.appendChild(article);
    })

};

/* async getTemples Function using fetch()*/
async function getCards() {

    let response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  
    // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the cardList variable. 
    let cardList = await response.json();
    displayCards(cardList);
  
  };
  


  // Step 6: Finally, call the output function and pass it the list of cards. 
  getCards(cardList);
  
  // Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
  function reset() {
    return document.getElementById('cards').innerHTML = '';
  };


/* sortBy Function */
function sortBy() {
    // - Calls the reset function
    reset();
    
    let sort = document.getElementById('sortBy');
  
    
    switch(sort(displayCards)) {
        
        case all:
            allTemples = displayCards(
                cards
            );

            return allCards;
        //code block    
        default:
        // code block
  }
    
  };

getCards();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(cardList)});
