const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0){
    return true;
  } 
}

const sum = (arr) => {
  // write code for numbers.sum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = arr.reduce(reducer);
  if(total == sum){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}