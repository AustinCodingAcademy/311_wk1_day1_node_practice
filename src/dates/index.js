// import moment here; use this package in each function
var moment = require('moment')

const today = () => {
  // write code for dates.today
  let day = moment().format('dddd')
  return day
}

const calendar = () => {
  // write code for dates.calendar
let cal = moment().format('MMM DD, yyyy')
return cal
}

const currentTime = () => {
  // write code for dates.currentTime
  let time = moment().format('hh:mm:ss A')
  return time
}

module.exports = {
  today,
  calendar,
  currentTime
}