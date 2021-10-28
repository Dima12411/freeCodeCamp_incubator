/* Task:
Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar. */

//code:

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 