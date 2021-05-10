// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  // write code for dates.today
  const day = moment().format('dddd')
  return day
}

const calendar = () => {
  // write code for dates.calendar
  const date = moment().format('LL')
  console.log(date)
  return date
}

const currentTime = () => {
  // write code for dates.currentTime
  let time = moment().format('LTS')
  return time
}

module.exports = {
  today,
  calendar,
  currentTime
}