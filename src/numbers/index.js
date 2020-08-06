const isEven = (num) => {
    // write code for numbers.isEven
    return (num % 2 ? false : true);
}

const sum = (arr) => {
    // write code for numbers.sum
    let n = arr.reduce((acc, cur) => (acc + cur))
    return n;
}

const comboSum = (arr, sum) => {
    // write code for numbers.comboSum
    let n = 0;
    arr.forEach(e => { n += e });
    return (n == sum ? true : false);
}

module.exports = {
    isEven,
    sum,
    comboSum
}