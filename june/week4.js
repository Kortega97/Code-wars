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

// 24th

// 25th

