// import moment here; use this package in each function

const today = () => {
  // write code for dates.today
  let d = new Date();
  let day = d.getDay();
  let r =''

  if(day === 0){
    day = 'Sunday'
  }else if(day === 1){
    day = 'Monday'
  }else if(day === 2){
    day = 'Tuesday'
  } else if(day === 3){
    day = 'Wednesday'
  }else if(day === 4){
    day = 'Thursday'
  }else if(day === 5){
    day = 'Friday'
  }else if(day === 6){
    day = 'Saturday'
  }
  return day
}

const calendar = () => {
  // write code for dates.calendar
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  
  if(month === 0){
    month = "Janary"
  }else if(month === 1){
    month = 'Febuary'
  }else if(month === 2){
    month = "March"
  }else if(month === 3){
    month = "April"
  }else if(month === 4){
    month = "May"
  }else if(month === 5){
    month = "June"
  }else if(month === 6){
    month = "July"
  }else if(month === 7){
    month = "August"
  }else if(month === 8){
    month = "Septmber"
  }else if(month === 9){
    month = "October"
  }else if(month === 10){
    month = "November"
  }else if(month === 11){
    month = "December"
  }

  let formattedDate = `${month} ${day}, ${year}`
  return formattedDate
}

const currentTime = () => {
  // write code for dates.currentTime
  let date =  new Date
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let dayOrNight = ''

  if(hour > 12){
    dayOrNight = "PM"
  }else{
    dayOrNight = "AM"
  }
  
  let time = `${hour}:${minute}:${second} ${dayOrNight}`
  return time
}

module.exports = {
  today,
  calendar,
  currentTime
}