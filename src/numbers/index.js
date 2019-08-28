const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 == 0;
}

const sum = (arr) => {
  // write code for numbers.sum
  let sumTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    sumTotal += arr[i]
  }
  return sumTotal;
}

// pretty sure i did this wrong...
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    if (total !== sum) {
      return false;
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}