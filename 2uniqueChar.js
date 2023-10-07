/////////// Unit 7 Assessment - Step 2 ///////////////
/////////// Problem 3 - Unique Characters //////////////////////

const perf = require("execution-time")();
let arrayTest = [];

function createArrayTest2(size) {
  let arrayTest = [];
  for (let i = 0; i < size; i++) {
    arrayTest.push(i);
  }
  return arrayTest;
}

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.