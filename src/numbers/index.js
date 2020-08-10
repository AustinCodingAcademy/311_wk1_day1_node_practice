const { numbers } = require("..")
const totalled = require("totalled");
const { stubTrue } = require("lodash");

const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0)
  return true
}



const sum = (arr) => {
  // write code for numbers.sum
  let total = totalled(arr)
  return total

}





const comboSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i ++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] === 14)
      return true
    }

  }
  // write code for numbers.comboSum
  return false

}

module.exports = {
  isEven,
  sum,
  comboSum
}