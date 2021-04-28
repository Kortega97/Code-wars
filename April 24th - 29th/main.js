

// 26TH

function cookingTime(eggs) {
    return 5 * Math.ceil(eggs / 8);
  }

// 27TH
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }


// 28TH
function projectPartners(n) {
    return n * (n-1) / 2;
  }
