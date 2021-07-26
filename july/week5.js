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
// 28th
// 29th
// 30th
// 