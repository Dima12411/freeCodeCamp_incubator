/* Task:
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined */

//code:

// Setup
var sum = 0;

function addThree() {
  sum = 5 + 3;
}

function addFive() {
  var sum;
   sum = sum + 5;
}

addThree();
addFive();