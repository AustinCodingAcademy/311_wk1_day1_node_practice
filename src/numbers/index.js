const isEven = (num) => {
  return num % 2 === 0
}

const sum = (arr) => {
  //I need to recode this one using reduce()
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++){
    totalSum += arr[i]
    console.log(totalSum)
  }
  return totalSum
}

const comboSum = (arr, sum) => {
  let findSum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
  }, 0)
  
  if(findSum === sum){
    return true;
  } else{
    return false;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}