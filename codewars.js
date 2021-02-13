// one
'Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.'


function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

// two
'Make a simple function called greet that returns the most-famous "hello world!".'



  function greet(){
    return 'hello world!'
    }

// three
'Our friend Pac has finally decided to pursue a career in the coding industry.'
'He is a newbie, he needs to learn properly.'
'Therefore, Pac wants to apply for the worldwide famous -and very demanding-
'C0d3r 1ns1d3' 'Academy for beginners.'
'In order to join, Pac is required to solve a series of 3 exercises about 'Bug 'Fixes.'
'He has been sent an email from the Academy with the following instructions,'


    function yourFutureCareer(){
        var career = Math.random()
          if (career <= 0.32) {
            return  'FrontEnd Developer'
          } else if (career <= 0.65) {
            return  'BackEnd Developer'
          } else {
            return 'Full-Stack Developer'
          }
      }

// four

'Given: an array containing hashes of names'

'Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.'

      function list(names){
        let output = "";
        let length = names.length;
        for(i=0; i < length; i++){
          if(length > 2 && i < length - 2){
           output += names[i]['name'] + ', ' ;
          }
          else if( i == length - 1 && i !== 0) {
            output += ' & ' + names[i]['name'] ;
          } else{
            output += names[i]['name'];
          }
        }
        return output;
      }


// five
'This code does not execute properly. Try to figure out why.'


      function multiply(a, b){
        a * b
        return a * b
      }