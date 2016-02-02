$(document).ready(function () {
    $.material.init();





});


$(".responsive-calendar").responsiveCalendar({
    time: '2013-05',
    events: {
        "2013-04-30": {
            "number": 5,
            "url": "http://w3widgets.com/responsive-slider"
        },
        "2013-04-26": {
            "number": 1,
            "url": "http://w3widgets.com"
        },
        "2013-05-03": {
            "number": 1
        },
        "2013-06-12": {}
    }
});
