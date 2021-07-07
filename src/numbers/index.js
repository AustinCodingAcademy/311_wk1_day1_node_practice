function isEven (num) {
  if (num % 2 === 0) {
      return true; 
  } else {
      return false;
}
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((a,b) => a + b);
}

// const comboSum = (arr, sum) => {
//   // write code for numbers.comboSum
//   const wasSumFound = 
// }

function comboSum(candidates, target) {
  for (let i=0; i<candidates.length; i++) {
    const valueAtI = candidates[i];
    for (let j=i+1; j<candidates.length; j++) {
      const sumOfIAndJ = valueAtI + candidates[j];
      if (sumOfIAndJ === target) {
        return true;
      }
    }
  }

  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}