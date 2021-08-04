const isEven = (num) => {
  // write code for numbers.isEven
  num % 2 === 0
  return true
};

const sum = (arr) => {
  // write code for numbers.sum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let x = arr.reduce(reducer);
  return x;
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    for (let z = 0; z < arr.length; z++) {
      if (arr[i] + arr[z] === sum) {
        return true;
      } else {
        return false
      }
    }
  }
};

module.exports = {
  isEven,
  sum,
  comboSum
}