const isEven = (num) => {
  // write code for numbers.isEven
  return num%2 === 0
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((acc, curr) => acc + curr)
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  return sum === arr.reduce((acc, curr) => acc + curr)
}

module.exports = {
  isEven,
  sum,
  comboSum
}