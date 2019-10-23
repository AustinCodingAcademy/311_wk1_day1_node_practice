const isEven = (num) => {
  // write code for numbers.isEven
if ( num % 2 === 0) {
  return true;
}
}

const sum = (arr) => {
  const reducer = (accumulator, currentVal) => accumulator + currentVal

  return arr.reduce(reducer)

}

const comboSum = (arr, sum) => {
  let match = false
  for (let i = 0; i<arr.length; i++){
    for (let j = i + 1; j<arr.length; j++){
      if (arr[i]+arr[j] === sum){
        match = true
      }
    }
  }
  return match
  

}

module.exports = {
  isEven,
  sum,
  comboSum
}