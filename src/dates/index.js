const moment = require('moment');
moment().format();


const today = () => {
  let date = moment()
  let day = date.day()
return moment.weekdays(day)


}

const calendar = () => {
let dateInfo = moment().format('ll')
return dateInfo

}

const currentTime = () => {
let dateInfo = moment().format('hh:mm:ss A')
return dateInfo
}

module.exports = {
  today,
  calendar,
  currentTime
}