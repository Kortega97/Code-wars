// 19th

// Find the contiguous subarray within an array (containing at least one number)
// which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// click to show more practice.
//   More practice:

// If you have figured out the O(n) solution, try coding another solution using
// the divide and conquer approach, which is more subtle.


/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray = function(nums) {
    if (nums == null || nums.length === 0) return 0
  
    let maxSum = nums[0], that = 0
    for (let i = 0, n = nums.length; i < n; i++) {
      that += nums[i]
      if (that > maxSum) maxSum = that
      if (that < 0) that = 0
    }
  
    return maxSum
  }
  
  ;[
    [-2, 1, -3, 4, -1, 2, 1, -5, 4], // 6
    [-1],                            // -1
    [1],                             // 1
  ].forEach(nums => {
    console.log(maxSubArray(nums))
  })
  
  
  const solution1 = function(nums) {
    let maxSum = 0, n = nums.length
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
    
        let thisSum = 0
        for (let k = i; k <= j; k++) thisSum += nums[k]
        if (thisSum > maxSum) maxSum = thisSum
      }
    }
    return maxSum
  }
  
  

  const solution2 = function(nums) {
    let maxSum = 0, n = nums.length
    for (let i = 0; i < n; i++) {
      let thisSum = 0
      for (let j = i; j < n; j++) {
  
        thisSum += nums[j]
        if (thisSum > maxSum) maxSum = thisSum
      }
    }
    return maxSum
  }
  
 
  const solution3 = function(nums) {
    function divideAndConquer(i, j) {
      if (i === j) return nums[i]
  
      const mid = (i + j) >> 1
      let leftMax = 0, rightMax = 0
      for (let k = mid, sum = 0; k >= i; k--) {
        sum += nums[k]
        if (sum > leftMax) leftMax = sum
      }
      for (let k = mid + 1, sum = 0; k <= j; k++) {
        sum += nums[k]
        if (sum > rightMax) rightMax = sum
      }
  
      return Math.max(
        divideAndConquer(i, mid),
        divideAndConquer(mid + 1, j),
        leftMax + rightMax
      )
    }
    return divideAndConquer(0, nums.length - 1)
  }
// 20th

// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    const hash = {}
    for (let i = 0, n = nums.length; i < n; i++) {
      if (hash[nums[i]] != null) return [hash[nums[i]], i]
      hash[target - nums[i]] = i
    }
    return [-1, -1]
  }
  
  
  ;[
    [[2, 7, 11, 15], 9]           // [0, 1]
  ].forEach(args => {
    console.log(twoSum(...args))
  })
// 21st


// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// click to show spoilers.
//   Have you thought about this?

// Here are some good questions to ask before coding. Bonus points for you if
// you have already thought through this!

// If the integer's last digit is 0, what should the output be? ie, cases such
// as 10, 100.

// Did you notice that the reversed integer might overflow? Assume the input is
// a 32-bit integer, then the reverse of 1000000003 overflows. How should you
// handle such cases?

// For the purpose of this problem, assume that your function returns 0 when the
// reversed integer overflows.

// Note: The input is assumed to be a 32-bit signed integer. Your function
// should return 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */

 const reverse = function(x) {
    const isOverflow = x => x > 0x7fffffff || -x > 0x7fffffff
    if (isOverflow(x)) return 0
  
    let y = Math.abs(x), result = 0
    while (y !== 0) {
      result = result * 10 + y % 10
      y = Math.floor(y / 10)
    }
  
    result *= x < 0 ? -1 : 1
    return isOverflow(result) ? 0 : result
  }
  
  ;[
    123,                          // 321
    -123,                         // -321
    -2147483648,                  // 0
    1534236469,                   // 0
  ].forEach(x => {
    console.log(reverse(x))
  })
// 22nd 
// Determine whether an integer is a palindrome. Do this without extra space.

// click to show spoilers. Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction
// of using extra space.

// You could also try reversing an integer. However, if you have solved the
// problem "Reverse Integer", you know that the reversed integer might overflow.
// How would you handle such case?

// There is a more generic way of solving this problem.

/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false
    let half = 0
    while (x > half) {
      half = half * 10 + x % 10
      x = Math.trunc(x / 10)
    }
  
    return x === half || x === Math.trunc(half / 10)
  }
  
  ;[
    -12321,                       // false
    9,                            // true
  ].forEach(x => {
    console.log(isPalindrome(x))
  })
// 23rd