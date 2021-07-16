// 12th 
class Solution {
    public:
        int maxDepth(TreeNode* root) {
            if (root == NULL) {
                return 0;
            } else {
                int leftDepth = maxDepth(root->left);
                int rightDepth = maxDepth(root->right);
                
                int max = leftDepth > rightDepth ? leftDepth : rightDepth;
                return max + 1;
            }
        }
    };
// 13th 
class Solution {
    public:
        struct BalanceHeight {
            bool balanced;
            int height;
        };
        
        BalanceHeight checkBalance(TreeNode* root) {
            if (root == nullptr) {
                return {true, -1};
            }
            
            BalanceHeight left = checkBalance(root->left);
            if (!left.balanced) {return {false, 0}; }
            
            BalanceHeight right = checkBalance(root->right);
            if (!right.balanced) {return {false, 0}; }
            
            bool balanced = abs(left.height - right.height) <= 1;
            int height = std::max(left.height, right.height) + 1;
            return {balanced, height};
        }
        
        bool isBalanced(TreeNode* root) {
            return checkBalance(root).balanced;
        }
    };
// 14th 
class Solution {
    public:
        vector<vector<int>> generate(int numRows) {
            if (numRows == 0) return {};
            vector<vector<int>> result;
            for (int i = 0; i < numRows; i++) {
                if (i == 0) {
                    result.push_back({1});
                } else {
                    vector<int> row;
                    for (int j = 0; j <= i; j++) {
                        if (j == 0) {
                            row.push_back(1);
                        } else if (j == i) {
                            row.push_back(1);
                        } else {
                            int elem = result[i-1][j-1] + result[i-1][j];
                            row.push_back(elem);
                        }
                    }
                    result.push_back(row);
                }
            }
            return result;
        }
    };
// 15th
class Solution {
    public:
        ListNode* reverseList(ListNode* head) {
            ListNode* p1 = nullptr;
            ListNode* p2 = head;
            while (p2 != nullptr) {
                ListNode* p3 = p2->next;
                p2->next = p1;
                p1 = p2;
                p2 = p3;
            }
            return p1;
        }
    };
// 16th
// 38. Count and Say
// Easy   35%

// The count-and-say sequence is the sequence of integers with the first five
// terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:

// Input: 1
// Output: "1"

// Example 2:

// Input: 4
// Output: "1211"


/**
 * @param {number} n
 * @return {string}
 */
 const countAndSay = function(n) {
    if (n < 1) return ''
    let result = '1'
    while (--n) {
      let t = '', first = -1
      for (let i = 0, m = result.length; i < m; i++) {
        if (result[i] !== result[i + 1]) {
          t += (i - first) + result[i]
          first = i
        }
      }
      result = t
    }
    return result
  }
  
  ;[
    1,                            // '1'
    2,                            // '11'
    3,                            // '21'
    4,                            // '1211'
    5,                            // '111221'
  ].forEach(n => {
    console.log(countAndSay(n))
  })
  