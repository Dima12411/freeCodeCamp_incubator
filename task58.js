/* Task:
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12. */

//code:

function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);