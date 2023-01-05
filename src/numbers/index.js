const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 == 0;
}

const sum = (arr) => {
  // write code for numbers.sum
  const result = arr.reduce((a, b)=> {
    return a + b;
  })
  return result;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
 return arr === sum;
}

module.exports = {
  isEven,
  sum,
  comboSum
}