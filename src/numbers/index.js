const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  }
}

const sum = (arr) => {
  return arr.reduce(function (a, b) {
    return a + b
  }, 0);
}

const comboSum = (arr, sum) => {
  for (let i=0; i<arr.length; i++) {
    for (let n=0; n<arr.length; n++) {
      if (i !== n) {
        if (arr[i] + arr[n] === sum) {
          return true;
        }
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