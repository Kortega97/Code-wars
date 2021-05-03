// march 22
// https://www.codewars.com/kata/53934feec44762736c00044b/solutions/javascript
// Number toString
// this code is iving an err

var a = (123).toString();

// My head is at the wrong end!

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
    return arr.reverse() //your code here 
    }

// march 24
// 101 Dalmatians - squash the bugs, not the dogs!
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
// The number of dogs will always be a number and there will always be at least 1 dog.

unction howManyDalmatians(number){
    if (number <= 10) {
      return "Hardly any"
    } else if (number <= 50) {
      return "More than a handful!"
    } else if (number === 101) {
      return "101 DALMATIANS!!!"
    } else {
      return "Woah that's a lot of dogs!" 
    }
  }   
  
  // march 25th
  // Incorrect division method
  // This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

  const solve = (x, y) => x / y 

  // March 26th
  // Get the integers between two numbers
//   Build a function that can get all the integers between two given numbers.

// Example:

// (2,9)

// Should give you this output back:

// [ 3, 4, 5, 6, 7, 8 ]

// If startNum is the same as endNum, return an empty array.

function range(startNum, endNum)   
{  
let finalArr = [];  // to place our results from the array 
  for (var i = startNum + 1; i < endNum; i++) { // for loop to get integers 
      finalArr.push(i)
  }
  return finalArr;
  //code goes in here
};  