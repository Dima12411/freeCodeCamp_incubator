/* Task:
Return the length of the longest word in the provided sentence.

Your response should be a number. */

//code:

function findLongestWordLength(str) {
    let max = 0;
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
  if (max < arr[i].length) {
    max = arr[i].length;
  }
  }
  return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");