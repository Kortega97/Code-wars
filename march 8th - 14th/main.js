// March 9th
// Complete the solution so that it reverses the string passed into it.

return str.split('').reverse().join('') 

// march 10th
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

var stringToNumber = function(str){
    // put your code here
     return parseInt(str);
   }
  //  Reversed Words
//    Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(' ').reverse().join(' ') 
  
}
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.4



function sortByLength (array) {
  return array.sort(function(a, b) {
   return a.length - b.length; // sort it by ascending order based from string's length
 });// Return an array containing the same strings, ordered from shortest to longest
};
