$(function(){
    countdown.setLabels(
    ' | | | | | | | | | | ',
    ' | | | | | | | | | | ',
    '',
    '',
    'agora');

    var timerId = countdown(new Date(2016, 7, 5), function(ts) {
        //ts.months = addZeros(ts.months); /* uncomment if using months */
        ts.hours = addZeros(ts.hours);
        ts.minutes = addZeros(ts.minutes);
        ts.seconds = addZeros(ts.seconds);

        time = ts.toHTML("td");
        time = time.replace(/\s/g, "");

        if(checkMobileWidth()) {
            renderMobile(ts);
        }
        else {
            $('#countdown').html(time);
        }

    }, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

    // function renderMobile(ts) {
    //     diaHora = [];
    //     minSec = [];

    //     diaHora.push($(ts.toHTML('td'))[0], $(ts.toHTML('td'))[1]);
    //     minSec.push($(ts.toHTML('td'))[2], $(ts.toHTML('td'))[3]);

    //     $('#countdown-1').html(diaHora);
    //     $('#countdown-2').html(minSec);
    // }

    function renderMobile(ts) {
        dia = $(ts.toHTML('td'))[0];
        hora = $(ts.toHTML('td'))[1];
        min = $(ts.toHTML('td'))[2];
        sec = $(ts.toHTML('td'))[3];

        $('#countdown-1').html(dia);
        $('#countdown-2').html(hora);
        $('#countdown-3').html(min);
        $('#countdown-4').html(sec);
    }

});

function addZeros(time){
    if (time < 10) {
        return "0" + time;
    }
    return time;
}

function checkMobileWidth() {
    if (window.innerWidth < 525) {
        return true;
    }
    return false;
}
