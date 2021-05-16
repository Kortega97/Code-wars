// april 12th
// leap year
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

function isLeapYear(year) { 
    if (year % 400 == 0){
      return true
     }else if(year % 100 == 0){
       return false
       }else if(year % 4 == 0){
       return true
       }
      else{return false}
    
      // TODO
    }
    // a 13th
    // Kata Example Twist
    // This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = [];
while (websites.length < 1000) websites.push("codewars")


    //  a 14th

    function peak(arr){

      var i, j;
      var leftsum, rightsum;
       
      for(i = 0; i < arr.length; ++i)
      {
 
          leftsum = 0;
           for(let j = 0; j < i; j++)
           leftsum += arr[j];
            
           rightsum = 0;
           for(let j = i + 1; j < arr.length; j++)
           rightsum += arr[j];
            
     
           if(leftsum == rightsum)
              return i;
      }
       
         return -1;
}

    // a15th

    function findAB(numbers,c){

      for (let i=0;i<numbers.length;i++){
        for (let j=1+i;j<numbers.length;j++){
         if (numbers[i]*numbers[j]===c) return [numbers[i],numbers[j]]
        }
      }
     return null
   } //coding and

    //  a 16th



 