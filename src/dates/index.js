var moment = require('moment');
// const day = moment().format('dddd')
// console.log(day)

const today = () => {
  return moment().format('dddd')
}

const calendar = () => {
  return moment().format('MMM D, YYYY')
}
console.log(calendar())

const currentTime = () => {
  return moment().format('h:mm:ss A')
}
console.log(currentTime())

/**
 * Return today's date in the format: May 29, 2019 (2ms)
    × Return the current time in the format: 03:21:51 PM
 */


module.exports = {
  today,
  calendar,
  currentTime
}