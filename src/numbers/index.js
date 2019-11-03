const isEven = (num) => {
  if(num % 2 === 0){
    return true
  }

}

const sum = (arr) => {
 return arr.reduce((acc, elem) => {
   return acc + elem;
}, 0)

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}