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





