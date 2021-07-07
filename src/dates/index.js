// import moment here; use this package in each function
var moment = require('moment');
moment().format();

const today = () => {
  // write code for dates.today
  const day = moment().format('dddd')

  return 'Today is', day
}

const calendar = () => {
  // write code for dates.calendar
const cal = moment().format('ll')

return cal
}

const currentTime = () => {
  // write code for dates.currentTime
const time = moment().format('hh:mm:ss A')

return time
}

module.exports = {
  today,
  calendar,
  currentTime
}