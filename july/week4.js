// 19th
// 53. Maximum Subarray
// Easy   39%

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
// 21st
// 22nd 
// 23rd