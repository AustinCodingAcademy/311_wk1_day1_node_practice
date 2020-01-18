const isEven = (num) => {
  return num % 2 === 0;

}

const sum = (arr) => {
  return arr.reduce((a, b) => a + b);

}

const comboSum = (arr, sum) => {
  let result = 0;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] + arr[j] === sum) {
          return true
        };
      }
    }
  }
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}