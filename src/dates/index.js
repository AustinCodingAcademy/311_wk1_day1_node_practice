// import moment here; use this package in each function
//12120
const moment = require('moment');

const today = () => {
  // write code for dates.today
  return moment().format('dddd')
}

const calendar = () => {
  // write code for dates.calendar
  return moment().format('ll')
}

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('HH:mm:ss A')
  // return "01:01:01 AM"
}

module.exports = {
  today,
  calendar,
  currentTime
}