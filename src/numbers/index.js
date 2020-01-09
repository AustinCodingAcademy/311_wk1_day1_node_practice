const isEven = (num) => {
  if(num % 2 === 0) {
    return true
  }
}

const sum = (arr) => {
  const accumulatorFunc = (accumulator, currentValue) => {
    return accumulator + currentValue;
  }
  return arr.reduce(accumulatorFunc, 0);
}

const comboSum = (arr, num) => {
  const sumOfArray = sum(arr)
  return sumOfArray == num
}

module.exports = {
  isEven,
  sum,
  comboSum
}