const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((accumulator, currValue) => accumulator + currValue);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let hasSum = false;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[i] + arr[j] === sum){
        hasSum = true;
      }
    }
  }
  return hasSum;
}

module.exports = {
  isEven,
  sum,
  comboSum
}