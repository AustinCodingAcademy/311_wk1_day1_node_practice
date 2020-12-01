const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue )
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let currentNum = 0
  for (let i = 0; i < arr.length; i++) {
    currentNum = currentNum + arr[i]
    if (currentNum == sum) {
      return true
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] == 14) {
          return true
        }
      }
    }
  }
  return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}