const isEven = (num) => {
  if(num % 2 === 0){
    return true 
  }else {
    return false
  }
}

const sum = (arr) => {
  //I need to recode this one using reduce()
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++){
    totalSum += arr[i]
  }
  return totalSum
}

const comboSum = (arr, sum) => {
  let findSum = arr.reduce(function(startingValue, nextValue){
    return startingValue + nextValue
  })
  
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