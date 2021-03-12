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
