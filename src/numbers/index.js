const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let total = arr.reduce((acc, value) => {
    return acc + value
  })
  return total 
}

const comboSum = (arr, num) => {
  // write code for numbers.comboSum
  let smaller = arr.filter((value) => value < num)
  if  (sum(smaller) === num) {
    return true
  } else if(sum(smaller) < num || sum(smaller) > num) {
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}