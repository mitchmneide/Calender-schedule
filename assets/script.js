var todayDay = document.querySelector("#currentDay");
let currentHour = moment().format("hh:mm:ss a");

// the current time/day funtion
var time = function () {
    var today = $(todayDay).find()
    var date = moment(today).format("dddd , MMM Do YYYY")
    todayDay.textContent = date;
}
var hoursArr = [
    "#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"]
var colorcode = function () {

    $(".time-block").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(moment().format("hh"));
        console.log(timeTest);
        console.log(hour);

        if (hour < timeTest) {
            $(this).addClass('future');
        }
        else if (hour === timeTest) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past")
        }
    })
}

$(document).ready(function () {
    time();
    colorcode();
    // Save button
    $(".saveBtn").on("click", function () {
        userInput = $(this).siblings(".description").val().trim();
        console.log(userInput);
        hourInput = $(this).siblings(".hour").text().trim();
        console.log(hourInput);
        localStorage.setItem(hourInput, userInput);
    })
// keeps data saved on site
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

});

