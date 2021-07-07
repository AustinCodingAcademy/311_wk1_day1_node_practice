const _ = require("lodash")

const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true
  }
} 

const sum = (arr) => {
  // write code for numbers.sum
  return _.sum(arr)
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  if (_.sum(arr) === sum) {
    return true
  } else {
    return false
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}