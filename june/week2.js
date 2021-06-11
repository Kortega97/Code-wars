// 7th
/*
Description:
How many licks does it take to get to the tootsie roll center of a tootsie pop?
A group of engineering students from Purdue University reported that its licking machine, modeled after a human tongue, took an average of 364 licks to get to the center of a Tootsie Pop. Twenty of the group's volunteers assumed the licking challenge-unassisted by machinery-and averaged 252 licks each to the center.
Your task, if you choose to accept it, is to write a function that will return the number of licks it took to get to the tootsie roll center of a tootsie pop, given some environmental variables.
Everyone knows it's harder to lick a tootsie pop in cold weather but it's easier if the sun is out. You will be given an object of environmental conditions for each trial paired with a value that will increase or decrease the number of licks. The environmental conditions all apply to the same trial.
Assuming that it would normally take 252 licks to get to the tootsie roll center of a tootsie pop, return the new total of licks along with the condition that proved to be most challenging (causing the most added licks) in that trial.
Example:
totalLicks({ "freezing temps": 10, "clear skies": -2 });
Should return:
"It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps."
Other cases: If there are no challenges, the toughest challenge sentence should be omitted. If there are multiple challenges with the highest toughest amount, the first one presented will be the toughest. If an environment variable is present, it will be either a positive or negative integer. No need to validate.
*/
const totalLicks = (env) => {
    var licks = 252
    let challenge
  
    for (const effect in env) {
      if ((env[effect] > 0) && (!challenge || env[effect] > env[challenge])) {
          challenge = effect
        }
      licks += env[effect]
    }
    return `It took ${licks} licks to get to the tootsie roll center of a tootsie pop.` +
      (challenge ? ` The toughest challenge was ${challenge}.` : "")
  }
  
// 8th
String.prototype.repeat = String.prototype.repeat
// 9th 
function shadesOfGrey(n) {
    var shades = []
    
    for (var i = 1; i <= Math.min(n, 254); i++) {
      var grey = ('0' + i.toString(16)).slice(-2)
      shades.push('#' + grey + grey + grey)
    }
    
    return shades
  }
  
// 10th
const seven = m => {
    let times = 0
    while ((''+m).length > 2) {
      times++
      m = Math.floor(m / 10) - (m % 10) * 2
    }
    return [m, times]
  }
  
// 11th
/*
Description:
Note: This kata has been inspired by GCJ 2010's "Store credit", where one also has to parse the actual input. If you solved this kata, try that one too. Note that GCJ's version always has a solution, whereas this kata might not.
Story
You got a gift card for your local store. It has some credit you can use to buy things, but it may be used only for up to two items, and any credit you don't use is lost. You want something for a friend and yourself. Therefore, you want to buy two items which add up the entire gift card value.
Task
You will get the value of the gift card c and a finite list of item values. You should return a pair of indices that correspond to values that add up to c:
buy(2,[1,1])       = [0,1]
buy(3,[1,1])       = null
buy(5,[5,2,3,4,5]) = [1,2]
The indices start at 0. The first index should always be smaller than the second index. If there are multiple solutions, return the minimum (lexicographically):
buy(5,[1,2,3,4,5]) = [0,3] // the values at [1,2] also adds up to five, but [0,3] < [1,2]
*/
var buy = function(x, arr){
    for (var i=0; i<arr.length-1; ++i)
      for (var j=i+1; j<arr.length; ++j)
        if (arr[i]+arr[j]==x)
          return [i,j]
    return null;
  };
  