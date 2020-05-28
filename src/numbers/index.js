const isEven = (num) => {
  return num % 2 == 0

}

const sum = (arr) => {
  // write code for numbers.sum
  arr.reduce((a, b) => a + b)

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}