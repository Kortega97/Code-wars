// march 16th

// Numbers to Letters

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
    let convertedArry = ""
  x.forEach(letter =>{ let val = Number(letter);
    switch(val){
        case 27: convertedArry+='!'
        break
        case 28: convertedArry+='?'
        break
        case 29: convertedArry+=' '
        break
        default: convertedArry+= String.fromCharCode((val-27)*(-1) +96) ; console.log()
    }
   })
  return convertedArry

// March 17th

//   Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if(bool === true){
      return "Yes"}
    else{return 'No'}//...
  }

   // March 18th

  // String repeat

  // Write a function called repeat_string which repeats the given string str exactly count times.

  function repeatStr (n, s) {
    return s.repeat(n);
  }

  // march 19th 

  // Find numbers which are divisible by given number

  // Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

  function divisibleBy(numbers, divisor){

    return numbers.filter(element => element % divisor == 0)
    
    }