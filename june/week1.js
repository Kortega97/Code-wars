// 1st
/*
Description:
Return the type of the sum of the two arguments
*/
const typeOfSum = (a, b) => typeof(a + b);

// 2nd
function sayHello(name) {
    return `Hello, ${name}`
  }
// 3rd
/*
Description:
Remember that one episode of spongebob where Spongebob and Patrick were leaving glove world and got on the wrong bus and ended up at Rock Bottom? If so, do you remember the creature that worked at the bus station, that talked like this:
https://www.youtube.com/watch?v=LGTe9bLQNIE
For this challenge, you're going to create a function that translates plain english into the rock bottom accent that that creature has.
The function should take a string, and replace every space between the words with a 'PLHHHH', which is representative of the raspberry noise that he makes.
For example:
   rockBottom("I cant understand your accent") // => 'IPLHHHHcantPLHHHHunderstandPLHHHHyourPLHHHHaccent'
  rockBottom('The next bus wont be coming until morning') // => 'ThePLHHHHnextPLHHHHbusPLHHHHwontPLHHHHbePLHHHHcomingPLHHHHuntilPLHHHHmorning'
*/
function rockBottom(arr) {
    return arr.replace(/ /g,'PLHHHH')
  }
// 4th
/*
Description:
Fix the code, so any written string put in function returns enclosed in two hearts. <3 Please give string a bit of space before and after a heart! <3
*/
function hearts(n) {
    return `<3 ${n} <3`
  }
  