const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0;
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((sum, tot) => {
    return sum + tot;
  }, 0);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  if(arr.indexOf(sum)!== -1){
    return true
  }
  else {
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}
