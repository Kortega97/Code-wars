// Mon-22

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    return -Math.abs(num) 
      }
//   refrences   
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// https://stackoverflow.com/questions/5574144/positive-number-to-negative-number-in-javascript

// tues - 23
// Make it return the oppsite number 

function opposite(number) {
  if( number >= 0 ){
  return -Math.abs(number)//your code here
}
  else{ return Math.abs(number)}
}

