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

// 3) Pangram Sentence
// Write a function to check a sentence to see if it is a pangram or not.


const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const str1 = "The quick brown FoX jumps over the lazy dog";
const str2 = "I like cats, but not mice";
const str3 = "ABcdefgHijklmnopQRStuvwxyzz";
const str4 = "I was lazy, so this is not quite a pangram...even with x";
const str5 = "When zombies arrive, quickly fax Judge Pat."
const str6 = "Amazingly few discotheques provide jukeboxes."


const isPangram = (str) => {
  let strLowerCase = str.toLowerCase();
  for (let i = 0; i < alphabetArray.length; i++) {
    if (!strLowerCase.includes(alphabetArray[i])) {
      return false; // Return true if any character is found
    }
  }
  return true;
};
//Testing//
console.log(str1, "- ", isPangram(str1));
console.log(str2, "- ", isPangram(str2));
console.log(str3, "- ", isPangram(str3));
console.log(str4, "- ", isPangram(str4));
console.log(str5, "- ", isPangram(str5));
console.log(str6, "- ", isPangram(str5));