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

// wens 24th

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`

function numberToString(num) {
  num.toString()
  return num.toString()// Return a string of the number here!
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString


// thurs 2-25

// Overview
// Hello, this is my first Kata so forgive me if it is of poor quality.

// In this Kata you should fix/create a program that returns the following values:

// false/False if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers
// You may assume the following:

// If a and b are both numbers, neither of a or b will be 0.

function myFirstKata(a ,b){
  if ((typeof(a,b) !== 'number') || (typeof(a) !== 'number' && typeof(b) === 'number') ){
     return false 
  } else {
    return a % b + b % a;
  }
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof