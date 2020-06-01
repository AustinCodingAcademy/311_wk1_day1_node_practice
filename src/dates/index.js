// import moment here; use this package in each function
var moment = require('moment');
moment().format();

const today = () => {
  // write code for dates.today
  const day = moment().format('ddd')
  console.log(day)
}

const calendar = () => {
  // write code for dates.calendar
  const date = moment().format('LL')
  console.log(date)
}

const currentTime = () => {
  // write code for dates.currentTime
  const tiempo = moment().format('LTS')
  console.log(tiempo)
}

module.exports = {
  today,
  calendar,
  currentTime
}