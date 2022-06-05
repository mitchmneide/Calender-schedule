var todayDay = document.querySelector("#currentDay");
// the current time/day funtion
var time = function () {
    var date = moment().format("dddd , MMM Do YYYY")
    todayDay.textContent = date;
}
// sets the textarea to represent past/future/present
var colorcode = function () {

    $(".time-block").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = moment().hours();
        console.log(timeTest);
        console.log(hour);

        if (timeTest < hour) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        }
        else if (timeTest == hour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future")
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present")
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

F