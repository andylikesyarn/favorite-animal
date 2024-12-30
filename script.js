/*
Favorite Animal Toggle

Description: Add two buttons labeled "Show Dog" and "Show Cat." Clicking the buttons should show the name of the selected animal and hide the other.

Objective: Practice toggling elements and reassigning variables.

Instructions
1.+++ Add two buttons labeled "Show Dog" and "Show Cat."
2. +++Add two <div> elements for displaying "Dog" and "Cat," but hide them by default.
3. Use JS to show the correct animal name when its button is clicked, and
4. Hide the other animal name at the same time.

*/
// Description: Create a page with a button that toggles the text between "Good Morning!" and "Good Night!" when clicked.

// Instructions

// Step 1: write a hidden class in the CSS

// Step 2: get each <p> element from the DOM using document.getElementById()
let body = document.querySelector("body");
console.log(body);

let catDiv = document.getElementById("cat-div");
console.log(catDiv);

let dogDiv = document.getElementById("dog-div");
console.log(dogDiv);

let catButton = document.getElementById("cat-button");
console.log(catButton);

let dogButton = document.getElementById("dog-button");

// Step 3: create a function that toggles the hidden class on each <p> element

function catToggler() {
  console.log("button was clicked");
  catDiv.classList.toggle("hidden");
  dogDiv.classList.add("hidden");
}

catButton.addEventListener("click", catToggler);

//dog
function dogToggler() {
  console.log("button was clicked");
  dogDiv.classList.toggle("hidden");
  catDiv.classList.add("hidden");
}

dogButton.addEventListener("click", dogToggler);
