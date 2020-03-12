// import moment here; use this package in each function
var moment = require('moment');

const today = () => {
  // write code for dates.today
let tod = moment().format('dddd')
return tod
}

const calendar = () => {
  // write code for dates.calendar
let date = moment().format('MMM DD, YYYY')
return date
}
const currentTime = () => {
  // write code for dates.currentTime
  let time = moment().format('HH:mm:ss A')
return time
}

module.exports = {
  today,
  calendar,
  currentTime
}