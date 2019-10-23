const isEven = (num) => {
  return num % 2 === 0;
}


const sum = (arr) => {
  return arr.reduce((acc, elem) => {
    return acc + elem;
  }, 0)
}

const comboSum = (arr, sum) => {
  if (arr.indexOf(sum) !== -1) {
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