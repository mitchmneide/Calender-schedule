var todayDay = document.querySelector("#currentDay");
var timeBlock = document.getElementsByClassName("time-block");
var saveBtn =document.getElementsByClassName(".saveBtn")
let currentHour = moment().format("h:mm:ss a");
// the current time/day funtion
var time =function() {
    var today = $(todayDay).find()
    var date = moment(today).format("dddd , MMM Do YYYY")
    todayDay.textContent= date;
}

var colorcode = function() {
  $(".time-block").each( function(){
      var timeTest = parseInt($(this).attr("id"));
      hour =parseInt(currentHour);
      console.log(timeTest);
      console.log(hour);
      
      if (hour < timeTest){
          $(this).addClass('future');
      }
      else if (hour === timeTest){
          $(this).addClass("present");
      }
      else {
          $(this).addClass("past")
      }
  })
}


time();
colorcode();