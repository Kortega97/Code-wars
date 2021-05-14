// may11th
// leetcode

-var isPalindrome = function(x) {
    x = x.toString()
    y = x.split('').reverse().join('')
    if (x  <  0 || x != y){
        return false
    }else{ return true}
};

// 12th

function hasUniqueChars(str) {  return new Set(str).size === str.length;}




// 13th
function caffeineBuzz(n) {  if (n % 12 === 0) return "CoffeeScript";  if (n % 6 === 0) return "JavaScript";  if (n % 3 === 0) return "Java";  return "mocha_missing!";}

// 14
// *Description:Given an array of integers, calculate the Average of these numbers.Main challenge is to write shortest and compact function for it.For example: var a = [0, 1, 2]; avg(a) // output should be 1Output of function will be also checked in tests, however most important is to write the shortest possible function as test will check length of written function. Input will always be valid.*/

function avg(a) {  return a.reduce((a, b) => a + b, 0) / a.length;}