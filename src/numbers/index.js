const isEven = num => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

const sum = arr => {
  //use reduce method
  // write code for numbers.sum
  let arrSum = arr.reduce(myFunc);
  function myFunc(total, num) {
    return total + num;
  }
  return arrSum;
};

const comboSum = (arr, sum) => {
  //use reduce method and compare to sum to return true or false
  // write code for numbers.comboSum

  let arrSum = arr.reduce(myFunc);
  function myFunc(total, num) {
    return total + num;
  }

  if (arrSum == sum) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isEven,
  sum,
  comboSum
};
