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
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] + arr.indexOf(i) === sum) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}