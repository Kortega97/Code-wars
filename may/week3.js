// 17th

// From the following table, find the highest roman numeral (n) with the highest decimal value (v) * that is taken from the left part of the roman numeral r * * From http://www.rapidtables.com/convert/number/how-roman-numerals-to-number.htm *  * I	1 * IV	4 * V	5 * IX	9 * X	10 * XL	40 * L	50 * XC	90 * C	100 * CD	400 * D	500 * CM	900 * M	1000 * res.js * @authors Your Name (you@example.org) * @date    2017-02-21 22:06:00 * @version $Id$ */
//  @param {string} s * @return {number} */

var romanToInt = function (s) {
    let res = 0;
    while (s) {
        if (s.indexOf('M') === 0) {
            res += 1000;
            s = s.substring(1);
        } else if (s.indexOf('CM') === 0) {
            res += 900;
            s = s.substring(2);
        } else if (s.indexOf('D') === 0) {
            res += 500;
            s = s.substring(1);
        } else if (s.indexOf('CD') === 0) {
            res += 400;
            s = s.substring(2);
        } else if (s.indexOf('C') === 0) {
            res += 100;
            s = s.substring(1);
        } else if (s.indexOf('XC') === 0) {
            res += 90;
            s = s.substring(2);
        } else if (s.indexOf('L') === 0) {
            res += 50;
            s = s.substring(1);
        } else if (s.indexOf('XL') === 0) {
            res += 40;
            s = s.substring(2);
        } else if (s.indexOf('X') === 0) {
            res += 10;
            s = s.substring(1);
        } else if (s.indexOf('IX') === 0) {
            res += 9;
            s = s.substring(2);
        } else if (s.indexOf('V') === 0) {
            res += 5;
            s = s.substring(1);
        } else if (s.indexOf('IV') === 0) {
            res += 4;
            s = s.substring(2);
        } else if (s.indexOf('I') === 0) {
            res += 1;
            s = s.substring(1);
        }
    }
    return res;
}


// 18th

var removeElement = function (nums, val) {
    let curIndex = 0;
    const arrLen = nums.length;
    for (let i = 0; i < arrLen; i++) {
        if (nums[i] !== val) {
            nums[curIndex++] = nums[i];
        }
    }
    return curIndex;
};

// 19
// * Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//  *
//  * You may assume that each input would have exactly one solution, and you may not use the same element twice.
//  *
//  * two-sum.js
//  *
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
let twoSum = function(nums, target) {
	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if ( addition(nums[i], nums[j]) === target ) {
				return [j, i];
			}
		}
	}
};
// add a with b and return it
let addition = function(a, b) {
	return a + b;
};