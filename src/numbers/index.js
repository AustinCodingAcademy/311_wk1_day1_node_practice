const isEven = (num) => {
  //if provided num is even return true
  if (num % 2 === 0) return true
  //otherwise return false
  else return false
}

const sum = (arr) => {
  //establish reducer function
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //return the result of running the reducer method on the passed array
  return arr.reduce(reducer);
}

const comboSum = (arr, sum) => {
  //begin for loop
  for (let i = 0; i <= arr.length; i++){
    //set the target value to current index minus the sum we are looking for
    let target = arr[i]-sum;
    //look for the target var value in the arr
    let targetPlace = arr.indexOf(target)
    //if the target number exists return true
    if (targetPlace != -1) return true
  }
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}