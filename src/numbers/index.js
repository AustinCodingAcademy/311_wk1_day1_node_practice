const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  }

}

const sum = (arr) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return(arr.reduce(reducer));
  // let total = 0;
  // arr.forEach(num => {
  //   total += num;
  // });
  // return total;

}

const comboSum = (arr, sum) => {
  let doesMatch = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        doesMatch = true;
      }
    }
  }
  return doesMatch;
}

module.exports = {
  isEven,
  sum,
  comboSum
}