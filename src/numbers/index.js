const isEven = num => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  }
};

const sum = arr => {
  // write code for numbers.sum
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  const add = (a, b) => {
    a + b;
  };
  const num = arr.reduce(add);
  if (sum === num) {
    return sum;
  } else {
    return false;
  }
};

module.exports = {
  isEven,
  sum,
  comboSum
};
