// 26th
//Write a function to find the longest common prefix string amongst an array of
//strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {
    if (strs == null || strs.length === 0) return ''
    const n = strs.length, m = strs[0].length
    for (let i = 0; i < m; i++) {
      const c = strs[0][i]
      for (let j = 1; j < n; j++) {
        if (strs[j][i] !== c) return strs[0].substring(0, i)
      }
    }
    return strs[0]
  }
  
  ;[
    [],                           // ''
    [''],                         // ''
    ['abc'],                      // 'abc'
    ['a', 'b'],                   // ''
    ['123', '123456', '1232'],    // '123'
  ].forEach(strs => {
    console.log(longestCommonPrefix(strs))
  })
// 27th
// Given a string containing just the characters '(', ')', '{', '}', '[' and
// ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid
// but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
    const stack = []
    for (let v of s) {
          if (v === '(') stack.push(')')
          else if (v === '{') stack.push('}')
          else if (v === '[') stack.push(']')
          else if (stack.length === 0 || stack.pop() !== v) return false
    }
  
    return stack.length === 0
  }
  
  ;[
    '(',                          // false
    '()',                         // true
    '([)]',                       // false
    '(]',                         // false
    '()[]{}',                     // true
  ].forEach((s) => {
    console.log(isValid(s))
  })
// 28th
// 29th
// 30th
// 