// 21st
/*
Description:
While creating IPtables rules to protect your server you want to write a function generateRules to help you with this. The function generateRules should take two arguments:
a function which takes 1 port argument and creates a single IPtables rule
an array with the ports for which the IPtables rules should be generated.
The generateRules function should return one string with the iptables commands.
This is how the generateRules function will be used:
var myrules = generateRules(makeTCPRule, [22,80,443]);
For this example the result would be this string (without linebreakings!):
"iptables -I INPUT -p tcp --dport 22 -j ACCEPT ;
iptables -I INPUT -p tcp --dport 80 -j ACCEPT ;
iptables -I INPUT -p tcp --dport 443 -j ACCEPT ;"
The makeTCPRule function is already provided for you and looks like this:
function makeTCPRule(x){
  return "iptables -I INPUT -p tcp --dport " + x + " -j ACCEPT ;";
*/
function generateRules(func,portList){
    let str='';
    for(let i=0;i<portList.length;i++){
    str+=func(portList[i])}
    return str}
// 22nd
/*
Description:
Marcus was spending his last summer day playing chess with his friend Rose.

Surprisingly, they had a lot of pieces (we suspect Marcus is a part-time thief, but we will leave that aside), and Marcus wondered in how many different positions could 8 towers (rooks) be in the board, without threatening themselves.

Rose (who was smarter) was wondering if there was any relation between the size of the board, and the number of positions.

So, you should help!

Write a function that, given N (positive-only integer) the size of the board , returns the number of different combinations in which these towers can be.

Example:

towerCombination(2) returns 2, because only the following possibilities can be achieved.

| x 0 |
| 0 x |

| 0 x |
| x 0 |
towerCombination(3) returns 6, because only the following possibilities can be achieved.

| x 0 0 |
| 0 x 0 |
| 0 0 x |

| x 0 0 |
| 0 0 x |
| 0 x 0 |

| 0 x 0 |
| x 0 0 |
| 0 0 x |

| 0 x 0 |
| 0 0 x |
| x 0 0 |

| 0 0 x |
| x 0 0 |
| 0 x 0 |

| 0 0 x |
| 0 x 0 |
| x 0 0 |
*/

function towerCombination(n){
    return n === 1 ? 1 : n * towerCombination(n - 1);
  }
  © 2021 GitHub, Inc.
  Terms
  Privacy
  Security
  Status
  Docs
  Contact GitHub
  Pricing
  API
  Training
  Blog
  About
  
// 23rd
/*
Description:
The object of this kata is to create a function called removeValue that removes all of a certain value from an array using .splice() and then returns the array. If the array is empty or has no element to remove it should return false.
example:
    arr = [1, 2, 1, '1', 3]
    arr.removeValue(1); // returns [2, '1', 3]
For more information on .splice() visit http://www.w3schools.com/jsref/jsref_splice.asp .
*/

Array.prototype.removeValue = function(thing) {
    if (this.indexOf(thing) == -1) return false;
    var i ;
    while ((i = this.indexOf(thing)) > -1) this.splice(i,1);
    return this;
 }
 
// 24th
/*
Description:
The 26 letters of the English alphabets are randomly divided into 5 groups of 5 letters with the remaining letter being ignored. Each of the group is assigned a score of more than 0. The ignored letter always has a score of 0.
With this kata, write a function nameScore(name) to work out the score of a name that is passed to the function.
The output should be returned as an object:
{'Mary Jane':20}
Only letters have a score. Spaces do not.
You can safely assume that name does not contain any punctuations or symbols. There will also be no empty string or null value.
A static alpha object for testing has been preloaded for your convenience in the following format:
{'ABCDE':1,'FGHIJ':2,'KLMNO':3,'PQRST':4,'UVWXY':5}  //'Z' is ignored
Note that the alpha object will be randomly generated each time you run the test.
#Example
In accordance to the above alpha object, the name Mary Jane will have a name score of 20 => M=3 + a=1 + r=4 + y=5 + J=2 + a=1 + n=3 + e=1
*/
function nameScore(name) {
	let nameList = name.replace(/\s+/gi, '').toUpperCase().split('');
	let score = 0,
		result = {};
	for (let x in alpha) {
		for (let i = 0; i < nameList.length; i++) {
			if (x.indexOf(nameList[i]) !== -1) {
				score += alpha[x];
			}
		}
	}

	result[name] = score;
	return result;
}
// 25th
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

