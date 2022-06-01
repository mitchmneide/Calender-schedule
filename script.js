var currentTime = document.querySelector("#currentDay");

var time =function() {
    var today = new Date();
    var date = today.getFullYear()+ '-'+(today.getMonth()+1)+'-'+today.getDate();
    currentTime.textContent = date;
}
time()