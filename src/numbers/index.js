const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0;
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((sum, val) => {
    return sum + val;
  }, 0);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(sum - arr[i]))
      return true;
  }
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}