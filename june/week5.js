// 28th
/*
Description:
Training JS #19:
Methods of String object--toUpperCase() toLowerCase() and replace()

This time we learn three string methods used to change the contents of the string:toUpperCase() toLowerCase() and replace(). Their usage:

stringObject.toUpperCase()
stringObject.toLowerCase()
stringObject.replace(substring/regexp,replacement)
toUpperCase() and toLowerCase() usage is very simple. No parameters needs accept. It can convert all the characters in the string to uppercase or lowercase. like this:

var str="My name is John";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//output:
MY NAME IS JOHN
my name is john
The following is a classic usage. Capitalize the first letter of a sentence:

var str="this is an example.";
var result=str[0].toUpperCase()+str.slice(1);
console.log(result);

//output:
This is an example.
The example below is to capitalize the first letter of all the words in the sentence. We used the split() and join() that we learned last time.

var str="this is an example.";
var words=str.split(" ");
for (var i=0;i<words.length;i++){
  words[i]=words[i][0].toUpperCase()+words[i].slice(1);
}
console.log(words.join(" "));

//output:
This Is An Example.
It seems a bit complicated. Let's learn new method to improve it.

replace() can replace the text specified(parameter 1) in the string with parameter 2. For example:

var str="this is an example.";
var result=str.replace("this","that");
console.log(result);

//output:
that is an example.
Let's use replace() to improve the example above (capitalized the first letter):

var str="this is an example.";
var words=str.split(" ");
for (var i=0;i<words.length;i++){
  words[i]=words[i].replace(words[i][0],words[i][0].toUpperCase());
}
console.log(words.join(" "));

//output:
This Is An Example.
If the parameter 1 of replace() is a regular expression, it will be more simple(We don't even need to split the string):

var str="this is an example.";
var result=str.replace(/\b\w/g,x=>x.toUpperCase());
console.log(result);

//output:
This Is An Example.
This code uses a regular expression and an arrow function. This allows us to achieve a more powerful role in the code. All of these will be learning in the future lesson. We need to do now is to learn the basics.

Another point needs to pay attention: If replace() uses a regular expression as parameter 1, and all the characters that match the regular expression are replaced(The regular expression uses a global matching option g). If we use a string as a parameter 1, only the first match(from left to right) of the string is replaced. like this:

var str="example";
var result=str.replace("e","@");
console.log(result);

//output:
@xample
As you can see, the second "e" will not be replaced.

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```alienLanguage```, function accept 1 parameter:```str```. ```str``` is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

for example:

```
alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
```
A small hint: The first conversion of the entire string will make the code easier
*/

function alienLanguage(str){
    return str.split(' ').map(v=>v.slice(0,-1).toUpperCase() +v.slice(-1).toLowerCase()).join(' ');
   }
   
// 29th
/*
Training JS #20:
Methods of String object--charAt() charCodeAt() and fromCharCode()
This time we learn three string methods used to single character operation :charAt() charCodeAt() and fromCharCode(). Their usage:
stringObject.charAt(index)
stringObject.charCodeAt(index)
String.fromCharCode(num1,num2,...,numX)
charAt() method can return to the specified location of the character. like this:
var str="abcde";
console.log(str.charAt(0));
console.log(str.charAt(1));
//output:
a
b
In practical use, the charAt() method is usually replaced by str[index]. Because it is more convenient:
var str="abcde";
console.log(str[0]);
console.log(str[1]);
//output:
a
b
charCodeAt() method can return the specified location of the character of the Unicode encoding. This return value is an integer between 0 and 65535.
Method charCodeAt() and charAt() operation is similar, but the former is returned to the specified location of the character encoding, and the latter is returned to the character string.
Unicode is a computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.This is the reference information of unicode.
This example will display the character value and unicode value of each characters in str:
var str="abcde";
for (var i=0;i<str.length;i++){
  console.log(str.charAt(i),str.charCodeAt(i));
}
//output:
a 97
b 98
c 99
d 100
e 101
If parameter index of charCodeAt() is omitted, its returned value will be the first character of stringObject. So the parameter can be omitted when the string length is 1; in other cases, you can't omit the parameter, unless you want to get the first character. An example of omitted parameter:
var chars="abcde".split("");
for (var i=0;i<chars.length;i++){
  var tmp=chars[i].charCodeAt();
  if (tmp==97) console.log("a for apple");
  else console.log(tmp);
}
//output:
a for apple
98
99
100
101
fromCharCode() can accept one or more specified Unicode values, and then return a string. The method is a static method of String. It cannot be used as a method of the String object you have created. So its syntax should be String.fromCharCode() instead of stringObject.fromCharCode(). See example:
var chars=[];
for (var i=97;i<123;i++){
  chars.push(String.fromCharCode(i));
}
console.log(chars.join(""))
//output:
abcdefghijklmnopqrstuvwxyz
This code uses fromCharCode() to create a string from a to z.
When fromCharCode() has only one parameter, it is very much like the reverse operation of charCodeAt(). they are a pair of good partners. We often see them in the kata about the shift encryption. See an example:
function decode(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++) 
    chars[i]=String.fromCharCode(chars[i].charCodeAt()-1);
  return chars.join("");
}
function encode(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++) 
    chars[i]=String.fromCharCode(chars[i].charCodeAt()+1);
  return chars.join("");
}
var s="abcde"
s=encode(s);
console.log("encode:",s)    //encryption s
s=decode(s);
console.log("decode:",s)    //decryption s
//output:
encode: bcdef
decode: abcde
This is a simple example of the shift of encryption, encryption to the right (Unicode value becomes large) shift 1. The decryption and encryption on the contrary.
Ok, lesson is over. let's us do some task.
#Task
Coding in function ```topSecret```, function accept 1 parameter:```file```. ```file``` is an encrypted string.
Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, and then answer my three questions. If the answer is correct, you will pass the test.
Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; The shift mode is a cyclic shift, for example:
```
character "A" after decryption should be "X" instead of ">"
character "B" after decryption should be "Y" instead of "?"
character "C" after decryption should be "Z" instead of "@"
character "a" after decryption should be "x" instead of "^"
character "b" after decryption should be "y" instead of "_"
character "c" after decryption should be "z" instead of "`"
```
Additional hints: Fixed testcase only test the correctness of the decryption code. The answer to the three question will appear only after clicking on "Submit".
This task may be more difficult for beginners. Good Luck!
Some trainer may have doubts about the three questions, the following is some explanation, I hope to be helpful to the trainer.
for example, after you click "submit", you see these text on your screen:
Top secret files: No. 3330
Super agent eEB, on a dark night, stole the Apple core from National Museum, causing $100 million in damage.
and then:
question 1 should answer:"3330"
question 2 should answer:"eEB"
question 3 should answer:"Apple core"
if you haven't seen something like the text above, perhaps your decryption code is not correct ;-)
Although the text is not the same every time, the next time may appear:
Top secret files: No. 2135
Super agent ZIUScE, on a dark night, stole the Lolli pop from National Museum, causing $100 million in damage.
You only need to choose one of the text as the answer to the question. That is to say, any one of them is the correct answer.
*/
function topSecret(str){
    let dict = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y','z'];
   let Dict = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
    return str.replace(/[a-z]/gi,v=>{
    if (v===v.toLowerCase()){
    return dict.indexOf(v.toLowerCase())-3<0?
    dict[dict.indexOf(v.toLowerCase())-3+26]
   :dict[dict.indexOf(v.toLowerCase())-3]}
   if (v===v.toUpperCase()){
    return Dict.indexOf(v)-3<0?
    Dict[Dict.indexOf(v)-3+26]
   :Dict[Dict.indexOf(v)-3]}
   return v}
   );
   
  }
  //question1: The top secret file number is...
  const answer1="3745";
  //question2: Super agent's name is...
  const answer2="RILc";
  //question3: He stole the treasure is...
  const answer3="Expired biscuits";
  
// 30th
/*
Description:
Next training (#23 Array Methods) >>
Training JS #22:
Unlock new skills--Arrow function,spread operator and deconstruction
OK, my warriors! Now that you beat the big BOSS, you can unlock three new skills. (Does it sound like we're playing an RPG? ;-)
#The Arrow Function (JS only)
The first skill is the arrow function. Let's look at some examples to see how it works:
//a normal function:
function plus(a,b){
  return a+b;
}
//or we can write like this:
var plus=function(a,b){
  return a+b;
}
//now, wo can use arrow function write it:
var plus=(a,b)=>a+b;
         ~~~~~~~~~~  ------arrow function
As you can see, its syntax is:
(parameters) => {statement} or expression
If only one parameter exists on the left side of the arrow, the bracket can be omitted. If only one expression exists on the right side of the arrow, the curly braces can also be omitted. The example below shows a function with the () and {} omitted.
var add=x=>x+1;
If the right side of the arrow is a complex statement, you must use curly braces:
var pushElement=(arr,el1,el2)=>{
  arr.push(el1);
  arr.push(el2);
  return arr;
}
console.log( pushElement([1],2,3) );
//output:
[ 1, 2, 3 ]
So far, our examples have used function assignment. However, an arrow function can also be used as a parameter to a function call, as well. When used as a parameter, the arrow function does not require a name. Let's rewrite the string.replace() example we saw from a previous training using our new skill:
var str="abababab";
console.log( str.replace(/a/g, x=>x.toUpperCase()) );
//output:
AbAbAbAb
String.replace takes a regular expression and a function. The function is invoked on each substring matching the regex, and return the string replacement of that match. In this case, the arrow function takes the matched string as the parameter x, and returns the upper cased value of x.
In the soon to learn the arrayObject and its methods, there are many applications on the arrow function, which is the reason we first learn the arrow function. The arrow function has more complex usage and usage restrictions, but we don't need to learn to be so deep, so we only learn the contents of the above.
#The Spread Operator
The second skill is the spread operator. The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.
It looks like this: ...obj. It can be used in three places:
1.In function calls:
function plus(a,b,c,d,e){
  return a+b+c+d+e;
}
var arg1=[1,2,3,4,5];
var arg2=[2,3];
console.log(plus(...arg1));
console.log(plus(1,...arg2,4,5));
//output:
15
15
...arg1 spreads all the elements in arg1 into individual parameters to plus(). In Javascript, it's also possible to use the spread operator in the middle of a parameter list, as was done with ...arg2.
2.Creating array literals (JS and Ruby):
var a=[1,2,3]
var b=[...a,4,5]
console.log(b);
//output:
[ 1, 2, 3, 4, 5 ]
...a spreads out the array's elements, making them individual elements in b.
3.Used for deconstruction. destructuring is also a new member of ES6. It is the third skill we learn in this training.
First, let's look at a simple example of destructuring:
var [a,b]=[1,2];   //the old method is var a=1,b=2;
console.log(a);
console.log(b);
//output:
1
2
Destructuring allows us to assign variables in a sentence-like form. Here's a slightly more complicated example:
var [a,b]=[1,2]
//Exchange the values of the two variables
//classic method:
var c=a;    //defined c to help us
a=b;
b=c;
//deconstruction method:
var [a,b]=[1,2];
[b,a]=[a,b];
console.log(a);
console.log(b);
//output:
2
1
With destructuring, we don't need a temporary variable to help us exchange the two values.
You can use the spread operator for destructuring like this:
var [a,...b]=[1,2,3,4,5];
console.log(a);
console.log(b);
//output:
1
[ 2, 3, 4, 5 ]
Please note: the spread operator must be the last variable: [...a,b]=[1,2,3,4,5] does not work.
a was assigned to the first element of the array, andbwas initialized with the remaining elements in the array.
Javascript note: If you see an ellipse ... in the argument list in a function declaration, it is not a spread operator, it is a structure called rest parameters. The rest parameter syntax allows us to represent an indefinite number of arguments as an array, like this:
function plus(...num){
  var rs=0
  for (x of num) rs+=x;
  return rs;
}
console.log(plus(1,2));
console.log(plus(3,4,5));
//output:
3
12
The rest paramater must be the last argument in the function definition argument list.
In the next example, we use a rest parameter to collect all the values passed to mul() after the first into an array. We then multiply each of them by the first parameter and return that array:
function mul(a,...b){
  for (var i=0;i<b.length;i++) b[i]*=a;
  return b;
}
console.log(mul(2,1,1,1));
console.log(mul(2,1,2,3,4));
//output:
[2,2,2]
[2,4,6,8]
Ok, the lesson is over. Did you get it all? Let's do a task, now.
#Task
Create a function ```shuffleIt```. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.
Example:
```
shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
```
*/
var shuffleIt=(arr,...swap)=>{
    for (var i=0; i<swap.length; i++)
    {
      var [a,b] = [swap[i][0],swap[i][1]];
      [arr[a],arr[b]] = [arr[b],arr[a]];
    }
    return arr;
  }
  
