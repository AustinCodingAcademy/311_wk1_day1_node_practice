// import moment here; use this package in each function

const today = () => {
  // write code for dates.today
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[new Date().getDay()]
}

const calendar = () => {
  // write code for dates.calendar
  let today = new Date()
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let month = months[today.getMonth()]
  let day = today.getDate()
  let year = today.getFullYear()

  return `${month} ${day}, ${year}`
}

const currentTime = () => {
  // write code for dates.currentTime

}

module.exports = {
  today,
  calendar,
  currentTime
}