// -24th
function highAndLow(numbers){
    let nums = numbers.split(" ");
      return `${Math.max(...nums)} ${Math.min(...nums)}`;
    }
// -25th
function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
 }
// -26th
function insertDashII(num) {
    num=num.toString().split('')
    const arr=[];
    for (let i=0;i<num.length;i++)
    {arr.push(num[i])
    if (num[i]%2===0&&num[i+1]%2===0&&num[i]!=='0'&&num[i+1]!=='0'){arr.push('*')}
    if (num[i]%2!==0&&num[i+1]%2!==0&&num[i+1]!==undefined){arr.push('-')}
    }
    return arr.join('')
    }
// -27th
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let total = dadYearsOld - (sonYearsOld * 2)
      return Math.abs(total)
      
    }
// -28th
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }