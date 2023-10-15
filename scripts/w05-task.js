/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
templeList = [];

/* async displayTemples Function*/ 
const displayTemples = (temples) => {

    templeList = temples;
    let div = document.getElementById('temples');
  
    temples.forEach(temple => {
  
      // - Creates an HTML <article> element
      let article = document.createElement('article');
  
      // - Creates an HTML <h3> element and add the temple's templeName property to it
      let h3 = document.createElement('h3');
      h3.innerHTML = temple.templeName;
      article.appendChild(h3);

      let h4First = document.createElement('h4');
      h4First.innerHTML = temple.location;
      article.appendChild(h4First);
  
      // - Creates an HTML <h4> element and add the temple's dedicated property to it
      // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
      let h4Second = document.createElement('h4');
      h4Second.innerHTML = temple.dedicated;
      article.appendChild(h4Second);
  
      // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
      let image = document.createElement('img');
      image.setAttribute('src', temple.imageUrl);
      article.appendChild(image);
      
      // - Appends the <article> element to the HTML element with an ID of temples
      div.appendChild(article);
    })

};

/* async getTemples Function using fetch()*/
async function getTemples() {

    let response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  
    // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
    let templeList = await response.json();
    displayTemples(templeList);
  
  };
  


  // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
  getTemples(templeList);
  
  // Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
  function reset() {
    return document.getElementById('temples').innerHTML = '';
  };


/* sortBy Function */
function sortBy() {
    // - Calls the reset function
    reset();
  
    let sort = document.getElementById('sortBy');
  
    
    switch(filter(displayTemples)) {
        case "utah":
            displayTemples(
                temples.filter((temple) => temple.location.includes("Utah"))
            );      
        // code block
        break;
        case "notUtah":
            displayTemples(
                temples.filter((temple) => temple.location.not(including("Utah")))
            );
        // code block
        break;
        case older:
            displayTemples(
                temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950,0,1))
            );
        //code block
        break;
        case all:
            displayTemples(
                temples
            );
        //code block    
        default:
        // code block
  }
    
  };

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});
