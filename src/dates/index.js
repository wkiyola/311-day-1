// // import moment here; use this package in each function
// const moment = require('moment')

//NONE OF MY DATES FUNCTIONS PASS THE TEST BUT THEY ALL WORK.
//I COULDN'T FIGURE OUT HOW TO USE MOMENT & ALSO TWEAK THE WORDING TO PASS THEM :(


     //FUNCTION #1

const today = () => {
  // write code for dates.today
  // moment().format()

    let day = new Date().getDay()
    switch (day) {
      case day = 0:
        day = 'Sunday'
        break;
        case day = 1:
        day = 'Monday'
        break;
        case day = 2:
        day = 'Tuesday'
        break;
        case day = 3:
        day = 'Wednesday'
        break;
        case day = 4:
        day = 'Thursday'
        break;
        case day = 5:
        day = 'Friday'
        break;
        case day = 6:
        day = 'Saturday'
        break;
    
        default:
    }
    
    return `Today is ${day} FunDay!`
    }

    today()

    //FUNCTION #2

const calendar = () => {
  // write code for dates.calendar

  year = new Date().getFullYear()
month = new Date().getMonth()
date = new Date().getDate()
 
 //switching thru months
switch(month) {
  case month = 0:
    month = 'January'
    break;
    case month = 1:
    month = 'February'
    break;
    case month = 2:
    month = 'March'
    break;
    case month = 3:
    month = 'April'
    break;
    case month = 4:
    month = 'May'
    break;
    case month = 5:
    month = 'June'
    break;
    case month = 6:
    month = 'July'
    break;
    case month = 7:
    month = 'August'
    break;
    case month = 8:
    month = 'September'
    break;
    case month = 9:
    month = 'October'
    break;
    case month = 10:
    month = 'November'
    break;
    case month = 11:
    month = 'December'
    break;

  default:
}

today = month + " " + date + "," + " " + year  

return today
}

calendar();

   // FUNCTION #3


const currentTime = () => {
  // write code for dates.currentTime 
  var minutes = new Date().getMinutes();
  var hours = new Date().getHours();
  var seconds = new Date().getSeconds();
  let amOrPm = ""
  

if(hours>12){
  hours = hours-12
  amOrPm = "PM"
} else {
   amOrPm = "AM"
}
if(minutes<10){
  minutes = "0" + minutes
}
var time = hours+ ":" + minutes + ":" + seconds + " " + amOrPm
 return time
}


currentTime();


module.exports = {
  today,
  calendar,
  currentTime
}