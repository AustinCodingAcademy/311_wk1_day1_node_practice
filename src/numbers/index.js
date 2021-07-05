const isEven = (num) => {
 if (num %2 == 0) {return true}
 else {return false}

}

const sum = (arr) => {
  const reducer = (accumulator, currentVal) => accumulator + currentVal
  
  return arr.reduce(reducer)

}
//comeback to this one
const comboSum = (arr, sum) => {
  let match = false
  for (let i = 0; i<arr.length; i++){
    for (let j = 0; j<arr.length; j++){
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