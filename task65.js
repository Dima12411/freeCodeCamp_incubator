/* Task:
Add the less than operator to the indicated lines so that the return statements make sense. */

//code:

function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);