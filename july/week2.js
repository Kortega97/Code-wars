// 5th
/*
Description:
Training JS #26:
methods of arrayObject---map()
This lesson we learn a very useful method of array: map(). The map() method creates a new array with the results of calling a provided function on every element in this array. This method can make people lazy ;-) because it can significantly reduce the amount of code input. For more information, please refer to: Array.prototype.map()
Here are some examples to help us understand the use of map():
This example calculates the square root of each element:
//example1: Direct use of the existing function
var a=[1,4,9,16]
var b=a.map(Math.sqrt)
console.log(a)   //output: [ 1, 4, 9, 16 ]
console.log(b)   //output: [ 1, 2, 3, 4 ]
This example increases the value of each element by 1:
//example2: Using simple custom functions
var a=[1,2,3,4]
var b=a.map(x=>x+1)
console.log(a)   //output: [ 1, 2, 3, 4 ]
console.log(b)   //output: [ 2, 3, 4, 5 ]
This example will take the index of the array as a value:
var a=[...Array(4)]
var b=a.map((_,i)=>i)
var c=[...Array(4)].map((_,i)=>i)  
var d=Array.prototype.map.call(a,(_,i)=>i)
console.log(a)   //output: [ undefined, undefined, undefined, undefined ]
console.log(b)   //output: [ 0, 1, 2, 3 ]
console.log(c)   //output: [ 0, 1, 2, 3 ]
console.log(d)   //output: [ 0, 1, 2, 3 ]
In this example, a is an initialized array, we can see that the value of all the elements is undefined. b c d is the three different form, using the map() method to assign each element to the index of the element. Need to pay attention to is that this time the map method uses two parameters, the first argument represents the element itself, the second parameter represents the index of elements, we only use the second parameter, but first parameter can not be omitted, so we use the underscore (also with other characters, use the underscore is just to let the reader know this argument is not used).
The following example is the simulation of the reverse method, which uses three parameters, the third parameter represents the array itself:
var a=[2,4,6,8]
var b=a.map((_,i,arr)=>arr[arr.length-1-i])
console.log(a)   //output: [ 2, 4, 6, 8 ]
console.log(b)   //output: [ 8, 6, 4, 2 ]
Ok, lesson is over. let's us do some task.
#Task
Coding in function ```isolateIt```. function accept 1  parameters ```arr```, it's a string array. Your task is to put a character "|" into the middle of each element. 
If the string length is an even number, use the insert method. for example: ```"abcd"``` should became ```"ab|cd"```. ```"|"``` should be inserted between ```ab``` and ```cd```.
If the string length is an odd number, use the replacement method. for example: ```"abcde"``` should became ```"ab|de"```. Character ```c``` will be replaced by ```|```.
The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).
Some example:
```
isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
isolateIt(["1234","56789"]) should return ["12|34","56|89"]
```
a little hint: Flexible use of ```slice()``` Will make the work more simple.
*/
function isolateIt(arr){
    return arr.map(v=>{
    if (v.length%2==0){return v.slice(0,v.length/2)+'|'+v.slice(v.length/2)};
    if (v.length%2!==0){return v.slice(0,v.length/2)+'|'+v.slice((v.length/2)+1)};
    })
  }
  
// 6th
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> longestPalindromeBetween(const string& s, int i, int j) {
        while (i >= 0 && j < s.length()) {
            if (s[i] != s[j]) {
                break;
            }
            i--;
            j++;
        }
        return vector<int> {i+1, j};
    }
    
    string longestPalindrome(string s) {
        string result = "";
        for (int i = 0; i < s.length(); i++) {
            vector<int> odd = longestPalindromeBetween(s, i-1, i+1);
            vector<int> even = longestPalindromeBetween(s, i-1, i);
            vector<int> longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
            if (result.length() < longest[1] - longest[0]) {
                result = s.substr(longest[0], longest[1] - longest[0]);
            }
        }
        return result;
    }
};
// 7th
class Solution {
  public:
      ListNode* removeNthFromEnd(ListNode* head, int n) {
          int counter = -n;
          ListNode* toReturn = head;
          ListNode* p0 = head;
          ListNode* p1 = head->next;
          ListNode* p2 = head;
          while (p2 != nullptr) {
              if (counter > 0) {
                  p0 = p1;
                  p1 = p1->next;
              }
              counter++;
              p2 = p2->next;
          }
          if (counter == 0) {
              if (head->next != nullptr) {
                  head->val = head->next->val;
                  head->next = head->next->next;
                  return toReturn;
              } else {
                  return nullptr;
              }
          }
          p0->next = p1->next;
          return toReturn;
      }
  };
// 8th
class SolutionRecursive {
  public:
      ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
          if (l1 == NULL) {
              return l2;
          }
          if (l2 == NULL) {
              return l1;
          }
  
          if (l1->val < l2->val) {
              l1->next = mergeTwoLists(l2, l1->next);
              return l1;
          } else {
              l2->next = mergeTwoLists(l2->next, l1);
              return l2;
          }     
      }
  };
  
  class SolutionIterative {
  public:
      ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
          if (l1 == NULL && l2 == NULL) return NULL;
          ListNode resultHead(0);
          ListNode* resultTail_p = &resultHead;
          
          while (l1 != NULL && l2 != NULL)  {
              if (l1->val <= l2->val) {
                  resultTail_p->next = l1;
                  l1 = l1->next;
              } else {
                  resultTail_p->next = l2;
                  l2 = l2->next;
              }
              resultTail_p = resultTail_p->next;
          }
          resultTail_p->next = (l1 != NULL) ? l1 : l2;
          return resultHead.next;
      }
  };
// 9th
class Solution {
  public:
      bool checkSymmetry(const TreeNode* treeL, const TreeNode* treeR) {
          if (treeL == nullptr && treeR == nullptr) {
              return true;
          } else if (treeL != nullptr && treeR != nullptr) {
              return treeL->val == treeR->val && checkSymmetry(treeL->left, treeR->right) && checkSymmetry(treeL->right, treeR->left);
          }
          return false;
      }
      
      bool isSymmetric(TreeNode* root) {
          return root == nullptr || checkSymmetry(root->left, root->right);
      }
  };
