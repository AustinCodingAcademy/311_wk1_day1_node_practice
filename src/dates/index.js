// import moment here; use this package in each function
var moment = require('moment'); // require
moment().format(); 

const today = () => {
  // write code for dates.today
  let dayOfWeek = moment().day()

 if(dayOfWeek == 0){
   dayOfWeek = "Sunday";
 } 
  else if(dayOfWeek == 1){
  dayOfWeek = "Monday"
 }
 else if(dayOfWeek == 2){
  dayOfWeek = "Tuesday"
 }
  else if(dayOfWeek == 3){
  dayOfWeek = "Wednesday"
 }
  else if(dayOfWeek == 4){
  dayOfWeek = "Thursday"
 }
  else if(dayOfWeek == 5){
  dayOfWeek = "Friday"
 }
  else if(dayOfWeek == 6){
  dayOfWeek = "Friday"
 }
 
 console.log(dayOfWeek)
}

const calendar = () => {
  // write code for dates.calendar

}

const currentTime = () => {
  // write code for dates.currentTime
  

}

module.exports = {
  today,
  calendar,
  currentTime
}