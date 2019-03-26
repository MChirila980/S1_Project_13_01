"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Melinda Chirila
   Date:   3/14/2019
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/


window.onload = init();

//

function init() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener('mouseenter', lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

//stars function for the rating (5 stars total)

function lightStars() {
      var starNumber = event.target.alt;
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      };

      for (var i = starNumber; i < 5; i++) {
            stars[i].scr = "bw_star.png";
      };

      document.getElementById("rating").value = starNumber + "stars";
      event.target.addEventListener("mouseleave", turnOffStars);
      event.target.addEventListener("click", function () {
            event.target.removeEventListener("mouseleave", turnOffStars);
      })
}

//taking the stars off
function turnOffStars() {
      var stars = document.querySelectorAll("span#stars img")
      for(var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
}

//if the character count limit goes over 1000 then it will turn red.
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount = "/1000";
if(charCount > 1000) {
      wordCountBox.style.color = "white";
      wordCountBox.style.backgroundColor = "red";
}
else {
      wordCountBox.style.colro = "black";
      wordCountBox.style.backgroundColor = "write";
}


/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}