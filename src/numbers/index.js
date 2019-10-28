const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 0){
    return true
  }
  else {
    return false
  }

}

const sum = (arr) => {
  // write code for numbers.sum

  // *QUESTION* I understand that this holds the "current sum" and adds the next value 
  // as it goes through the array, but im still having trouble comprehending it
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = arr.reduce(reducer)
  return sum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (i = 0; i < arr.length; i++){
    for (x = i + 1; x < arr.length; x++){
      if (arr[i] + arr [x] === sum){
        return true
        break
      }
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}