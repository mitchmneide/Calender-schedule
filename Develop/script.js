var currentTime = document.querySelector("#currentDay");


var time =function() {
    var today = $(currentTime).find()
    var date = moment(today).format("dddd , MMM Do YYYY")
    currentTime.textContent= date;
}
time()