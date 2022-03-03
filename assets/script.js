//For Ensuring jQuery is ready; $( document).ready(funtion() {}); Was Short-Handed:
$(function() {
//>
    //Variables for conversion from DOM
    var saver = $(".svBtn");
    var timeBlock = $(".time-block");
//>
    //Page Header Day/Time moment.js threads
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
    $("#currentTime").text(moment().format('hh:mm'));
//>
    //Color-Coded Hour-Cards indicate Past-hours=WHITE; Future=GREEN; and Current=RED
    function hourIndicate() {
        var time = moment().hours();
        timeBlock.each(function () {
            var current = parseInt($(this).attr("id"));
                if (current > time) {
                    $(this).addClass("future");
                } else if (current === time) {
                    $(this).addClass("present")
                } else {
                    $(this).addClass("past")
                }
        });
    };
//>
    //Save Button and Local Storage for Text String
    saver.on("click", function () {
        var when = $(this).siblings(".hour").text();
        var task = $(this).siblings(".task").val();

        localStorage.setITem(when, task);
    });
//>
    //Refresh Local Persistance
    function persist() {
        $(".hour").each(function () {
            var taskTime = $(this).text();
            var taskText = localStorage.getItem(taskTime);

            if (taskText !== null) {
                $(this).siblings(".task").val(taskText);
            }
        });
    }
hourIndicate();
persist();
});

