// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  // write code for dates.today
  return moment(new Date()).format('dddd')
}

const calendar = () => {
  // write code for dates.calendar
    return moment().format('ll')
}

const currentTime = () => {
  // write code for dates.currentTime
    return moment().format('HH:mm:ss A')
}

module.exports = {
  today,
  calendar,
  currentTime
}