//For Ensuring jQuery is ready; $( document).ready(funtion() {}); Was Short-Handed:
$(function() {
    //Variables for conversion from DOM
    var saver = $(".svBtn");
    var timeBlock = $(".time-block");
    //Page Header Day/Time moment.js threads
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
    $("#currentTime").text(moment().format('hh:mm'));

    //Color-Coded Hour-Cards indicate Past-hours=WHITE; Future=GREEN; and Current=RED

    function hourIndicate() {

    }
})
