const isEven = (num) => {
  // write code for numbers.isEven
     if(num %2==0){
       return true;
     } else{
       return false;
     }
}

const sum = (arr) => {
  // write code for numbers.sum
  let sum=0;
  for(i=0;i<arr.length; i++){
     sum+=arr[i];
  }
    return sum;
    
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let arraySum=0;
  for(i=0;i<arr.length; i++){
     arraySum+=arr[i];
  }
    
  if(arraySum==sum)
  {
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