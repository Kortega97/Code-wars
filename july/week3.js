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
// 16th