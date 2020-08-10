// import moment here; use this package in each function

const moment = require("moment")

const today = () => { 
  
  return moment().format('dddd');
  // write code for dates.today

}

const calendar = () => {
 return  moment().format('ll')
  // write code for dates.calendar

}

const currentTime = () => {
  // write code for dates.currentTime
 return moment().format("hh:mm:ss A");
}

module.exports = {
  today,
  calendar,
  currentTime
}