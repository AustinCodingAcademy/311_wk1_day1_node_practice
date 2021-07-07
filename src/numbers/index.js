const isEven = (num) => {
  if(num % 2 === 0){
    return true
  }

}

const sum = (arr) => {
  // write code for numbers.sum
  let sum = 0;

  for(let i=0; i < arr.length; i++){
    sum = sum + arr[i];
    // console.log(arr[i])
  }
  console.log(sum)
  return sum

}
// sum([1,2,3,4,5,6])
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let x=0; x<arr.length; x++){
    for(let y=0 ; y<arr.length; y++){
      if((arr[x] + arr[y]) === sum){
        console.log(true)
        return true;
      } else {
        console.log(false);
        return false
      }

    }

  }

}
comboSum([1,2,3,4,5,6], 14)

module.exports = {
  isEven,
  sum,
  comboSum
}