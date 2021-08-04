const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((a,b) => a + b, 0);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let arrSum = arr.reduce((a,b) => a + b, 0);
  if (arrSum === sum) {
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