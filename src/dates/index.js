// import moment here; use this package in each function
const moment = require("moment")

const today = () => {
  return  moment().format('dddd'); 

}

const calendar = () => {
 return moment().format("MMM DD, YYYY");

}

const currentTime = () => {
  return moment().format('LTS');

}

module.exports = {
  today,
  calendar,
  currentTime
}