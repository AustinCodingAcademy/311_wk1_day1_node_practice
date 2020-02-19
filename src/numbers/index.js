const isEven = (num) => {
  // write code for numbers.isEven
  if (num%2===0) {
    return true;
  } else {
    return false
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let total = arr.reduce((prev, current) => prev+current)
  return total;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let isEqual = false;
  for (let i=0; i<arr.length-1; i++){
    for (let j=i+1; j<arr.length; j++){
      let total = arr[i]+arr[j];
      if (total === sum){
        isEqual = true;
      }
    }
  }
  return isEqual;
}

module.exports = {
  isEven,
  sum,
  comboSum
}