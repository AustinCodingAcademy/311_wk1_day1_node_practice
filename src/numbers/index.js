function isEven(num){

  if(num % 2 === 0){
    return true;
  }else{
    return false; 
  }
}

function sum(arr){

  let sum = 0; 

  for(let i = 0; i < arr.length; i++){
    let currentNum = arr[i]; 
    sum += currentNum; 
  }
  return sum; 
} 

function comboSum(arr, sum){

  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === sum){
        return true; 
      }
    }
  }
  return false; 
}

module.exports = {
  isEven,
  sum,
  comboSum
}