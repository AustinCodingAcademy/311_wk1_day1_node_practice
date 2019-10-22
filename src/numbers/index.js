const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

}

const sum = (arr) => {
  let total = arr.reduce((acc, val) => acc + val);
  return total;
}

const comboSum = (arr, sum) => {
  let total = arr.reduce((acc, val) => acc + val);
  if (total === sum) {
    return true
  } else {
    return false;
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}