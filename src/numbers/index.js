const isEven = (num) => {
  if (num % 2 == 0) return true
}

const sum = (arr) => {
  result = arr.reduce((x, y) => x + y)
  return result
}

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

module.exports = {
  isEven,
  sum,
  comboSum
}