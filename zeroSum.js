const perf = require('execution-time')();
let arrayTest = [];

function createArrayTest2(size){
    let arrayTest = [];
    for (let i=0; i<size; i++){
        arrayTest.push(i);
    }
    return arrayTest
}
/////////// Unit 7 Assessment - Step 2, write functions ////////////
const array1 = [];
const array2 = [1, -1];
const array3 = [1, 2, 3];
const array4 = [-1, -2, 3, -3];
const array5 = [10, 2, 3, 4, 5, -10];

//////////// Options 1: loop over the array, takign the sum of different elements and returnign true if a zero value is ofund
const sumZeroOptOne = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

///////// Option 2: loop over the array and look for a negative number
const sumZeroOptTwo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        if (arr.includes(Math.abs(arr[i]))) {
          return true;
        }
      }
    }
    return false;
  };
///////////TESTING function 1 option 1 //////////
console.log("PROBLEM ONE - Zero Sum - OPTION 1 TEST");
console.log(array1, "expext FALSE.  Result:", sumZeroOptOne(array1));
console.log(array2, "expext TRUE.  Result:", sumZeroOptOne(array2));
console.log(array3, "expext FASLE.  Result:", sumZeroOptOne(array3));
console.log(array4, "expext TRUE.  Result:", sumZeroOptOne(array4));
console.log(array5, "expext TRUE.  Result:", sumZeroOptOne(array5), "\n");



///////////TESTING function 1, options 2 //////////
console.log("PROBLEM ONE - Zero Sum - OPTION 2 TEST");
console.log(array1, "expext FALSE.  Result:", sumZeroOptTwo(array1));
console.log(array2, "expext TRUE.  Result:", sumZeroOptTwo(array2));
console.log(array3, "expext FASLE.  Result:", sumZeroOptTwo(array3));
console.log(array4, "expext TRUE.  Result:", sumZeroOptTwo(array4));
console.log(array5, "expext TRUE.  Result:", sumZeroOptTwo(array5), "\n");

///////// runtime comparison /////////
// Funciton 1, Option 1
perf.start();               
sumZeroOptOne(createArrayTest2(10000));
let resultsOne = perf.stop(); 

// Funciton 1, Option 2
perf.start();
sumZeroOptTwo(createArrayTest2(10000));
let resultsTwo = perf.stop();

console.log('Results for Problem 1, large array: Zero Sum');
console.log("Optiopn 1", resultsOne.time);
console.log("Option 2", resultsTwo.time);

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

