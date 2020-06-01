const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 === 0){
    return true
  }else{
    return false
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  arr.reduce((a,b) => a + b, 0)
}

const comboSum = (arr, sum) => {

for(let i = 0; i < arr.length; i++)
  {//loops through next index value after j loops through entire array
    for(let j = i+1; j < arr.length; j++)
    //executes through each value of array then back up to outer loop to loop through next index
    {
      if(arr[i] + arr[j] === sum){
        return true;
        //if true exits program
      } // END if 
    } // END inner for  
  } // END outer for
  //if no value combination equal sum return false
  return false;
  } // END function


module.exports = {
  isEven,
  sum,
  comboSum
}