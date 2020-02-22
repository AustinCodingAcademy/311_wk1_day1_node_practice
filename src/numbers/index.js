const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  }
}

const sum = (arr) => {
  // write code for numbers.sum

  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  //      .reduce(function(acc, val) {return acc + val;}, 0)
  return arr.reduce(function(acc, val){
    return acc + val;
  }, 0)

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let arrSum = arr.reduce(function(acc, val){
    return acc + val;
  }, 0)
  if(arrSum === sum){
    return true;
  }else{
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}
