// 1st
/*
Description:
Training JS #23:
methods of arrayObject---push(), pop(), shift() and unshift()
From this Kata, I will do some changes: to reduce the description of the text (to provide a reference link). Because I am not good at writing these words of description. Examples and essential points will be retained.
At this lesson, we will learn some methods about add/remove array elements. They are: push(), pop(), shift() and unshift(). Their usage and details please refer to:     pop()     shift()     push()     unshift().
Here are some examples to help us understand their usage:
var arr=[1,2,3,4,5]
arr.push(6)         //use push() add one element to the end of arr
console.log(arr)    //output: [1,2,3,4,5,6]
arr.push(7,8);       //also can add more than one elements to arr
console.log(arr);    //output: [1,2,3,4,5,6,7,8]
//use pop() can remove one element from the end of arr,
//and return the value of this element.
console.log(arr.pop());  //output: 8  (pop() returned a value 8)
//and then arr should left 7 elements
console.log(arr);  //output: [1,2,3,4,5,6,7]
//shift() is similar to pop(),
//but shift() removes the first element of the arr.
console.log(arr.shift());  //output: 1  (shift() returned a value 1)
//and then arr should left 6 elements
console.log(arr);  //output: [2,3,4,5,6,7]
//unshift() is the reverse operation of shift(), 
//it can add one or more elements to the start of arr
arr.unshift(1);
console.log(arr);  //output: [1,2,3,4,5,6,7]
arr.unshift(0,0);
console.log(arr);  //output: [0,0,1,2,3,4,5,6,7]
These four methods are the most basic methods of adding and removing elements. We can choose to use them according to their needs.
Of course, their shortcomings are obvious. First, they can only manipulate the head and tail of the array, not flexible enough. Secondly, their speed is relatively slow. But we usually don't feel it, when you need to deal with big data, you will understand what is slow. For example, in some cases, the direct assignment of the array elements will be faster than the push method:
//push method is slower
var arr1=[];
for (var i=0;i<1000000;i++) arr1.push(i);
//direct assignment will quiker than push()
var arr2=[];
for (var i=0;i<1000000;i++) arr2[i]=i;
Ok, lesson is over. let's us do some task.
#Task
Coding in function ```infiniteLoop```. function accept 3  parameters. The 1st parameter is ```arr```, it's a 2D array, it contains three 1D array. The 2nd parameter is ```d``` ，it's a string. The 3rd parameter is ```n```, it's a number.
You can think of ```arr``` as a moat, the elements of ```arr``` like water constantly flow in. The direction of flow is controlled by the parameter d. The value of ```d``` can be  "left" or "right". "left" means the "river" moves to the left. All elements in the 1D array are to the left moving ```n``` position, if beyond the bounds of the array and the element is moved to the tail on the left side of the array; if it exceeds the left boundary element would be moved to the tail of 3rd array(like a circle). Right is also similar to the operation, but it is moving to the right.
Finally, return arr.
Example:
```
infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) 
should return [[2,3,4],[5,6,7],[8,9,1]]
infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) 
should return [[9,1,2],[3,4,5],[6,7,8]]
infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) 
should return [[3,4],[5,6,7,8],[9,10,1,2]]
```
*/
const infiniteLoop = (arr,d,n) => {
    for (let i = 1; i <= n; i++){
    if (d === "left"){
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === "right"){
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
    }
    return arr;
  }
//   2nd
/*
Description:
Training JS #24:
methods of arrayObject---splice() and slice()
We have learned four basic array methods, pop(), push(), shift() and unshift(), they are used to add or remove an array of elements. But their disadvantage is that they can only add or remove elements in order. This time we learn a new method: splice(). It can add and/or remove elements at any location in the array. Its usage:
arrayObject.splice(startindex, deleteCount [,element1, element1, ...,elementx])
parameter1 and parameter2 are used to remove element. parameters in the [] is some elements to add, if we omitted it, splice() only performs removal operations.
We can write that way:
arrayObject.splice(a,b,[c,d,e,...,z])
Then ask yourself three questions:
Where do I start removing elements?   ---- a
How many elements need to be removed? ---- b
What elements should be added after the removal of the element?
--- c,d,e,...z
Some examples to help you understand splice()
function removeOdd(arr){
  //remove odd number of arr
  for (var i=arr.length;i>=0;i--)
    if (arr[i]%2) arr.splice(i,1)
  return arr;
}
console.log(removeOdd([1,2,3,4,5]))   //output: [ 2, 4 ]
console.log(removeOdd([1,3,5,7,9]))   //output: []
The example above removes all the odd numbers from the array, leaving all the even numbers.
Why don't I start to traverse the array from index0? because we need to pay special attention to that some of the methods of the array directly modify the original array. In some cases, if you forget the fact, you will get the wrong result. In the example above, if we start to traverse the array from index0, some element will be missed:
function removeOdd(arr){
  //remove odd number of arr
  for (var i=0;i<arr.length;i++)
    if (arr[i]%2) arr.splice(i,1)
  return arr;
}
console.log(removeOdd([1,3,5,7,9]))   //output: [3,7]
because:
When i=0, arr[i]=1, arr.splice(0,1) then arr=[3,5,7,9], i++
then i=1, arr[i]=5, element 3 is missed because its index is became to 0
so, we got an wrong answer...
Look at the following example:
function removeOdd(arr){
  //remove odd number from arr
  for (var i=arr.length;i>=0;i--)
    if (arr[i]%2) arr.splice(i,1)
  return arr;
}
function removeEven(arr){
  //remove even number from arr
  for (var i=arr.length;i>=0;i--)
    if (arr[i]%2==0) arr.splice(i,1)
  return arr;
}
var arr=[1,2,3,4,5]
removeOdd(arr)
console.log(arr)   //output: [ 2, 4 ]
removeEven(arr)
console.log(arr)   //output: []
Perhaps the purpose of running removeEven is to remove the even number, leaving the odd number. But in fact, we get an empty array, which is not what we want. How to improve it?
In this case, you can use slice() to make a "copy" for the array. In the previous study of string objects, We have known the slice, which is used to intercept a string. For an array object, the usage of slice() is similar to the stringObject method. Some people may want to use "=" operator to implement backup, but that is wrong. See the example:
var originalArray=[1,2,3,4,5];
//use "=" operators
var new1=originalArray;   
//use slice() without parameters can make a "copy"
var new2=originalArray.slice();  
//then three array all are [1,2,3,4,5], let's us do something..
new1.push(100);
new2.push(111);
//Let's look at the changes in these arrays:
console.log(new1)
console.log(new2)
console.log(originalArray)
//output:
[ 1, 2, 3, 4, 5, 100 ]
[ 1, 2, 3, 4, 5, 111 ]
[ 1, 2, 3, 4, 5, 100 ]
We can see that the value of the original array will be changed with the new1. Because new1 use "=" operator, just do a shortcut to the original array; The value of the original array does not change with new2. Because it uses slice() to create a new array, which has no relation to the original array.
So, we can use the slice() without the parameter to create a copy of the original array. However, if the original array is a 2D array or multidimensional arrays, the use of slice() is not enough. see example:
var originalArray=[[1,2,3],[4,5]];
//use slice() without parameters can make a "copy"
var newarray=originalArray.slice();  
newarray[1].push(100);
//Let's look at the changes in these arrays:
console.log(newarray)
console.log(originalArray)
//output:
[ [ 1, 2, 3 ], [ 4, 5, 100 ] ]
[ [ 1, 2, 3 ], [ 4, 5, 100 ] ]
We can see that when the copy array is changed, the original array will be changed. How to solve this problem? When we learn another method map() will get the answer.
As a programmer, do not modify the original array is a good programming habits. In many Kata are default or explicitly pointed out: the user should not modify the original array
Ok, lesson is over. let's us do some task.
#Task
Coding in function ```threeInOne```. function accept 1  parameters ```arr```, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result. 
Note1: You should not modify the original array.
Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do not have to verify the validity of the parameter, and do not worry about the number of elements of the array is not a multiple of 3.
Example:
```
threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
```
*/
function threeInOne(arr){
    const arr1=[];
    for (let i=0;i<=arr.length;i+=3){
      arr1.push(arr.slice(i,i+3))
      }
      return arr1.map(v=>v.reduce((a,b)=>a+b,0)).slice(0,-1)
  }
