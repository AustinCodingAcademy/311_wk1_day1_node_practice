const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true;
  }
};

const sum = (arr) => {
  // write code for numbers.sum
  let total = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return total;
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let total = arr.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (total == sum) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isEven,
  sum,
  comboSum,
};
