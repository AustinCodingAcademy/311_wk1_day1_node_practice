const isEven = (num) => {
  if (num%2 == 0)
    return true;
  else
    return false
}

const sum = (arr) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const final = arr.reduce(reducer)
  return final
}

const comboSum = (arr, sum) => {
  for (i = 0; i < arr.length; i++) {
    for(let i2 = 0; i2 < arr.length; i2++){
      if(arr[i] + arr[i2 == sum]){
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