/* Task:
You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign. */

//code:

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; 
let result = difficultSpelling.match(myRegex);