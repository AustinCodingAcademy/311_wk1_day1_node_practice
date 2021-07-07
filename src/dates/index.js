// import moment here; use this package in each function
const moment = require('moment')


const today = () => {
  // write code for dates.today
  thisday = moment().format("dddd")
  return thisday
}

const calendar = () => {
  // write code for dates.calendar
  thisdate = moment().format('ll')
  return thisdate
}

const currentTime = () => {
  // write code for dates.currentTime
  thistime = moment().format('hh:mm:ss A')
  return thistime
}

module.exports = {
  today,
  calendar,
  currentTime
}