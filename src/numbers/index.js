const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
};

const sum = arr => {
  let total = arr.reduce((a, b) => a + b);
  return total;
};

const comboSum = (arr, sum) => {
  let total = arr.reduce((a, b) => a + b);
  return total === sum;
};

module.exports = {
  isEven,
  sum,
  comboSum
};
