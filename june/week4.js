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

