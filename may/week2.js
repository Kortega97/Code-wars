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
