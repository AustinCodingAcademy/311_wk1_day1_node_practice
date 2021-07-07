const isEven = (num) => {
  // write code for numbers.isEven
    return num % 2 === 0;
}

const sum = arr => {
  // write code for numbers.sum
    return arr.reduce((acc,cur) => acc + cur);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
    const array2 = arr.reduce((acc,cur) => acc + cur);
    if (array2 === sum) {
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