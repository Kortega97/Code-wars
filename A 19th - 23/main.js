// A 19th
// Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


function getAverage(marks){
    var total = 0;
   for(var i = 0; i < marks.length; i++) {
       total += marks[i];
   }
   var avg = total / marks.length;
    
   
   return Math.floor(avg)
     //TODO : calculate the downwar rounded average of the marks array
   }

  //  A 20th
   function howManyDalmatians(number){
    if (number <= 10) {
      return "Hardly any"
    } else if (number <= 50) {
      return "More than a handful!"
    } else if (number === 101) {
      return "101 DALMATIANS!!!"
    } else {
      return "Woah that's a lot of dogs!" 
    }
  }   


  // A 21

  /*
Description:
The deleteValues function takes an array and removes elements that answer true to the pred function.
For some reason, some of the elements of the array for which the predicate holds are not deleted...
Can you fix the code?
*/
function deleteValues(array, pred) {
  for(let i = array.length - 1; i >= 0; i--) {
    if (pred(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}

//  A 22

*/

function capitalize(s){
  return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
          s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')]
};