var currentTime = document.querySelector("#currentDay");


var time =function() {
    var today = $(currentTime).find()
    var date = moment(today).format("dddd , MMM Do YY")
    currentTime.textContent= date;
}
time();