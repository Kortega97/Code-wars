// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number) {
    var total = 0;
    for (i = 0; i < number; i++)
    {
      
        if (i % 3 === 0 || i % 5 === 0)
        {
            total += i;
        }
    }
  
    return total;
}

// FIXME: Replace all dots

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

var replaceDots = function(str) {
    console.log(str)
      let re =/\./gi;
      return str.replace(re,'-');
    
    }

    // Super Duper Easy

    // Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

    function problem(x){
        if(x ===`${x}`){
          return "Error"
        }else{return (x * 50) + 6}
        //your code here
      }

      // Is this my tail?

//       Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be strings, and normal letters.

// For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.

function correctTail(body, tail){ 
  var sub = body.substr(body.length-tail.length)
    
    if(sub === tail) {
      return true
    }
    else{return false} }
    
    // Lost number in number sequence

    // An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
  
  if(arr.length === mixArr.length){
    return 0
    }else{
      mixArr.sort((a, b) =>{
        return a - b
      })
      let missingN 
      arr.forEach(n =>{
        if(!mixArr.includes(n)){
          missingN = n
        }
      })
      return missingN
      console.log(mixArr)
      }// your code
}
