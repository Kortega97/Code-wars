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

  
// 
// 
// 
// 
// 
