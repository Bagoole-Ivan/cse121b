/* Final Project Tasks */

/* Declaring and initializing global variables */
const cardsElement = document.querySelector("#cards");
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
  
      let image = document.createElement('img');
      image.setAttribute('src', card.imageUrl);
      article.appendChild(image);
      
      // - Appends the <article> element to the HTML element with an ID of cards
      div.appendChild(article);
    })

};

async function getCards() {

    let response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  
    let cardList = await response.json();
    displayCards(cardList);
  
  };
  


  getCards(cardList);
  
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
            allCards = displayCards(
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
