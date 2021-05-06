// 3
/*
Description:
Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.

-A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
-A duplicate person object is an object with the same phoneNumber as someone else

If the person object is unique, push them onto the end of the array, and return true.
If the person object is NOT unique, don't push them to the array and return false;
If the person doesn't have a phoneNumber, don't add them to the array and return false.
*/


function uniquePush(arr, obj) {
    if (obj.phoneNumber && !arr.some(function (entry) { return entry.phoneNumber == obj.phoneNumber })) 
      return arr.push(obj);
  }

// 4

/*
Description:
Write a function that takes an array/list of numbers and returns a number such that
Explanation total([1,2,3,4,5]) => 48
1+2=3--\ 3+5 =>     8 \
2+3=5--/ \            ==  8+12=>20\     
          ==>5+7=> 12 / \           20+28 => 48
3+4=7--\ /            == 12+16=>28/
4+5=9--/ 7+9 =>     16  /
if total([1,2,3]) => 8 then
first+second => 3 \
                   then 3+5 => 8
second+third => 5 /
Examples
total([-1,-1,-1]) => -4
total([1,2,3,4])  => 20
Note: each array/list will have at least an element and all elements will be valid numbers.
*/

function total(arr) {
    while(arr.length>2)
    {
      arr=arr.map((v,i,arr)=>v=(arr[i]+arr[i+1])).filter(v=>!isNaN(v))    
    }
    return arr.reduce((a,b)=>a+b)
  }
  

// 5

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

// 6

/*
Description:
Get the next prime number!
You will get a numbern (>= 0) and your task is to find the next prime number.
Make sure to optimize your code: there will numbers tested up to about 1012
Examples
5  ==> 7
12 ==> 13
*/

function nextPrime(n){
    let count=0;
    for(let i=n+1;i>0;i++){
    if (isPrime(i)){count = i; break}
    }
     return count
  }
  
  function isPrime(n) {
    let rt = Math.sqrt(n);
    for(let i = 2; i <= rt; i++) {
      if(n % i === 0) return false; 
    }
    return n !== 1;
  }
  


// 7