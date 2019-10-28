// import moment here; use this package in each function
const moment = require ('moment')



const today = () => {
  // write code for dates.today
  moment().format(dddd)
}

const calendar = () => {
  // write code for dates.calendar
  moment().format(LL)

}

const currentTime = () => {
  // write code for dates.currentTime
  moment().format(LTS)
}

module.exports = {
  today,
  calendar,
  currentTime
}