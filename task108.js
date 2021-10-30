/* Task:
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */

//code:

function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return "";
    }
    let result = "";
   
    let i = 0;
    while (i < num) {
      result = result + str;
      i++;
    }
    return result;
   }
   
   repeatStringNumTimes("abc", 3);