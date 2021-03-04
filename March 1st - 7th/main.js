// Monday March 1st 
// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

 function booleanToString(b){
 if ((b === true) || (b === false)){
    return b.toString(b)
  } //your code here
 }

//  Tues March 2nd 
// List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(num => typeof(num) === 'number')// Return a new array with the strings filtered out
   }

  
  //  March 3rd
  
  // Remove First and Last Character

  // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
  function removeChar(str) { 
    str.slice(1); 
     str.slice(0, str.length - 1); 
     return str
            } 
