const isEven = (num) => {
  // write code for numbers.isEven
   if(num %= 0){
     return false
   }else{
     return true
   }
}

const sum = (arr) => {
  // write code for numbers.sum
  for(let i = 0; i < arr.length; i++){
    let summ = 0
    for(let i = 0; i < arr.length; i++){
     summ = summ + arr[i]
     
    } return summ
  } 

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}