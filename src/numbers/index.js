const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  }

}

const sum = (arr) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return(arr.reduce(reducer));

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}