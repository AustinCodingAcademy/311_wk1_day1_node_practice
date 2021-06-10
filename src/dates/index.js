// import moment here; use this package in each function
const moment = require('moment');
const today = () => {
  // write code for dates.today
  let d = moment().format('dddd');
  console.log(d)
  return d
} 

const calendar = () => {
  // write code for dates.calendar
  
  let c = moment().format('May 29, 2019','mm,dd,yyyy');

  console.log(c);
  return c


}

  
    


const currentTime = () => {
  // write code for dates.currentTime
  const timeComes = new Date('May 24, 2021 00:20:18 GMT+00:00');

console.log(timeComes)

}

module.exports = {
  today,
  calendar,
  currentTime
}