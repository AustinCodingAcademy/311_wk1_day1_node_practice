const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) return true
  else return false
}

const sum = (arr) => {
  // write code for numbers.sum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i <= arr.length; i++){
    let target = arr[i]-sum;
    let targetPlace = arr.indexOf(target)
    if(targetPlace === -1) return false
    else if (targetPlace != -1) return true
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}