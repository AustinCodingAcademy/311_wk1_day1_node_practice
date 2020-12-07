const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 == 0){  //checks to see if the number is divisable by 2 (even)
    return true  //if so, returns true
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let startingSum = 0  //starts the initial value to 0
  const reducer = (runningTotal, nextNum) => { //basic reducer function
    return runningTotal + nextNum //
  }
  let result = arr.reduce(reducer, startingSum) //iterates through the array and adds each index value to the sum of the previous ones.
  return result  //returns the result
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let index = 0; index<arr.length; index++){
    for(let index2 = 0; index2<arr.length; index2++){
      if(arr[index] + arr[index2 == sum]){
        return true
      } else {
        return false
      }
    }
  }


}

module.exports = {
  isEven,
  sum,
  comboSum
}