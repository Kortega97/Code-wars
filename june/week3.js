// 14th
/*
Description:
The code is a recursive attempt in calculating the result of a factorial function.
I.e. the result of 3! (Factorial of 3) is 3x2x1 = 6.
In case of 0! the result is 1 and in case of a negative factorial the result should be 0.
The goal is to find the bugs in the sourcecode and fix them (play a little pest control).
*/

function facRecursion(value) {
    if (value < 0) return 0;
    if (value <= 1) return 1;
    return value * facRecursion(value - 1);
  }
// 15th
/*
Description:
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.
*/

function search(budget, prices) {
    return (prices.sort((a,b)=>a-b).filter(v=>v<=budget))+''
  }
  
// 16th
/*
Description:
Is Undefined?
Help Timmy remove undefined values from his array, you are modifing a callback function which he uses on each element on his array.
Task
Your task is to finish the isUndefined method which returns true if the value is undefined :)
*/

function isUndefined(value) {
    return value===undefined
  }
  
// 17th
/*
Description:
In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:
nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be seperated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!
*/
function nameThatNumber(x) {
    let returnedValue = "";
    let tens = {2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"};
    let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    if (x == 0) {
        returnedValue = "zero";
    }
    if (x < 20 && x > 0) {
        returnedValue = units[x];
    }
    if (x >= 20) {
        returnedValue = tens[Math.floor((x / 10))] + ((x % 10 != 0) ? " " : "") + units[x % 10];
    }
    return returnedValue;    
}

// 18th
function solution(digits){
    let answer = 0;
    
    for (let i=0; i<digits.length; i++){
      let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
      if(Number(number) > answer){       //convert to number and compare against answer
        answer = Number(number);
      }
    }
    return answer;
  }
  
