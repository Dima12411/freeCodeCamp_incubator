/* Task:
In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties. */

//code:

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    try {
      Object.freeze(MATH_CONSTANTS);
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();