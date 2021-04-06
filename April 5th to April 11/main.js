// april 5th
// Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc){
    if (cc.length > 4) {
      let result = '';
      return cc.split('').reduce((acc, cur, i) => {
        if (cc.length - i > 4) {
          result += '#';
        } else {
          result += cur;
        }
        return result;
      }, '');
    } else {
      return cc;
    }
  }

  
// april 6th 
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
 
// 
// 
