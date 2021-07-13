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
// 15th
// 16th