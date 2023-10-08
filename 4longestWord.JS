/////////// Unit 7 Assessment - Step 2 ///////////////
/////////// Problem 4 - Longest Word //////////////////////
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

///////////// psuedo code //////////////
// count the length of each word
// push the resulting integers into a new array
// sort the new array largest to smallest
// check if the largest values appears more than once
// return the first value in the new array

arr1 = ["hello", "world", "hi", "coding", "car", "book"];
arr2 = ["a", "games", "apple", "pumpkin", "mountain"];
arr3 = ["carrot", "yellow", "dart", "blue"];

const findLongestWords = (num, arr) => {
  let longestWords = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === num) {
      longestWords.push(arr[i]);
    }
  }
  return longestWords;
};

const find_longest_word = (arr) => {
  let wordLengths = [];
  for (let i = 0; i < arr.length; i++) {
    wordLengths.push(arr[i].length);
  }
  wordLengths.sort((a, b) => b - a);
  let maxLength = wordLengths[0];
  return findLongestWords(maxLength, arr);
};

//TESTING
console.log(arr1, "Longest:", find_longest_word(arr1));
console.log(arr2, "Longest:", find_longest_word(arr2));
console.log(arr3, "Longest:", find_longest_word(arr3));
