// Display today's day and date on the html page
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// function that allows the users information and time entered to be stored into local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
    
            // function tracks the current time of the day and amount of hours
                function timeTracker() {
                    var timeNow = moment().hour();
