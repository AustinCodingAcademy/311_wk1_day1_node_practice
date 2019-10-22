// import moment here; use this package in each function
const moment = require('moment');
moment().format();


const today = () => {
  // write code for dates.today
  let date = moment()
  let day = date.day()
  return moment.weekdays(day)
}

const calendar = () => {
  // write code for dates.calendar
  let dateInfo = moment().format('ll')
  return dateInfo
}

const currentTime = () => {
  // write code for dates.currentTime
let dateInfo = moment().format('hh:mm:ss A')
return dateInfo
}

module.exports = {
  today,
  calendar,
  currentTime
}