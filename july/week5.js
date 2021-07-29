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
// 26. Remove Duplicates from Sorted Array
// Easy   35%

// Given a sorted array, remove the duplicates in place such that each element
// appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with
// constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums
// being 1 and 2 respectively. It doesn't matter what you leave beyond the new
// length.

/**
 * @param {number[]} nums
 * @return {number}
 */
 const removeDuplicates = function(nums) {
    const n = nums.length
    if (n === 0) return 0
  
    let i = 0
    for (let j = 1; j < n; j++) {
      if (nums[j] !== nums[i]) {
        i++
        nums[i] = nums[j]
      }
    }
  
    return i + 1
  }
  
  ;[
    [1, 2, 2, 3, 3, 3, 4],        // 4
  ].forEach(nums => {
    console.log(removeDuplicates(nums))
  })
// 29th
// 27. Remove Element
// Easy   39%


// Given an array and a value, remove all instances of that value in place and
// return the new length.

// Do not allocate extra space for another array, you must do this in place with
// constant memory.

// The order of elements can be changed. It doesn't matter what you leave beyond
// the new length.

// Example:
// Given input array nums = [3,2,2,3], val = 3

// Your function should return length = 2, with the first two elements of nums
// being 2.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 const removeElement = function(nums, val) {
    let i = 0, j = nums.length - 1
    while (i <= j) {
      if (nums[i] === val) {
        nums[i] = nums[j]
        j--
      } else {
        i++
      }
    }
    return j + 1
  }
  
  ;[
    [[3, 2, 2, 3], 3],                 // [2, 2, 2, 3] 2
    [[1,2,3,4,5,3,5,2,3,6], 3],        // [1,2,6,4,5,2,5] 7
    [[1], 1],                          // [1] 0
  ].forEach(args => {
    console.log(removeElement(...args))
  })
// 30th
// 