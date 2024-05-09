var x = setInterval(function() {
    var date = new Date("jun 17,2024");
    todaydate = new Date().getTime();
    diff = date - todaydate
    /// for days ////
    days = Math.floor(diff / (1000 * 60 * 60 * 24))
    /// for hours ////
    hours = Math.floor(diff / (1000 * 60 * 60 ) % 24)
    /// for minute ////
    minute =  Math.floor(diff / (1000 * 60) % 60)
    /// for seconds ////
     seconds =  Math.floor(diff / (1000) % 60)
     
     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minute;
     document.getElementById("seconds").innerHTML = seconds;

},1000)



