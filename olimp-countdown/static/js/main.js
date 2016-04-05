$(function(){
    countdown.setLabels(
    ' | | | | | | | | | | ',
    ' | | | | | | | | | | ',
    '',
    '',
    'agora');

    var timerId = countdown(new Date(2016, 8, 3), function(ts) {
        //ts.months = addZeros(ts.months); /* uncomment if using months */
        ts.hours = addZeros(ts.hours);
        ts.minutes = addZeros(ts.minutes);
        ts.seconds = addZeros(ts.seconds);

        time = ts.toHTML("td");
        time = time.replace(/\s/g, "");
        $('#countdown').html(time);

    }, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

});

function addZeros(time){
    if (time < 10) {
        return "0" + time;
    }
    return time;
}
