/////////// Unit 7 Assessment - Step 2 ///////////////
/////////// Problem 2 - Unique Characters //////////////////////
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const str1 = "abc";
const str2 = "aab";
const str3 = "monday";
const str4 = "moonday";
const str5 = "abcc";
const str6 = "aa";
const str7 = "";

/// Loop over a string
// get the substing at each individual index and compare it to each substring ofer every other index)
// at index i, compare to all other indexes except i.
// acheived by starting at a given index nad measuring the next index for the length of the array minus 1

const fun1 = (string) => {
  let str = string.toLowerCase();
  console.log(str);
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++)
      if (str.substring(i, i + 1) === str.substring(j, j + 1)) {
        return "Not Unique";
      }
  }
  return "Unique";
};

////Testing ////
console.log(fun1(str1));
console.log(fun1(str2));
console.log(fun1(str3));
console.log(fun1(str4));
console.log(fun1(str5));
console.log(fun1(str6));
console.log(fun1(str7));
