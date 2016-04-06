$(function(){
    $(window).click(function(){
        swapColors();
    });

    $(window).on('tap', function(){
        swapColors();
    });

    function swapColors() {
        $('tr, th').toggleClass('font-color-white');
        $('body').toggleClass('body-color');
        toggleLogo($('#logo-rio').attr("src"));
    }

    function toggleLogo(src) {
        if(src == "static/img/rio2016.png") {
            $('#logo-rio').attr('src', 'static/img/rio2016-white.png');
        }
        else {
            $('#logo-rio').attr('src', 'static/img/rio2016.png');
        }
    }
});
