const moment = require('moment')

const today = () => {
  thisday = moment().format("dddd")
  return thisday
}

const calendar = () => {
  thisdate = moment().format('ll')
  return thisdate
}

const currentTime = () => {
  thistime = moment().format('hh:mm:ss A');
  return thistime
}

module.exports = {
  today,
  calendar,
  currentTime
}