const totalled = require("totalled");

const isEven = (num) => {
 if (num % 2 == 0) return true
}

const sum = (arr) => {
  let total = totalled(arr)
  return total
}

  // write code for numbers.comboSum
const comboSum = (arr, sum) => {
  for (let i = 0; i != arr.length; i++) {
    for (let j = 0; j != arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true
      } else {
        return false
        }
    }
  }
}

// exporting it as an object, everything inside the squirly's// will have methods on it
module.exports = {
  isEven,
  sum,
  comboSum
}