const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 == 0) {
    return true
  }else {
    return false
  }

}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce(reducer);
}



const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  

}

module.exports = {
  isEven,
  sum,
  comboSum
}