!function (a) {
    "use strict";
    /*Mobile menu selected to close menu*/
    $("#bs-example-navbar-collapse-1 ul li").click(function () {
        $("#bs-example-navbar-collapse-1").removeClass("in");
    });

    $("#js-grid-juicy-projects").on('initComplete.cbp', function() {
    	$(".cbp-l-loadMore-button").css({"visibility": "visible", "opacity": "1", "transition-delay": "0s"});
	});


}(this);

var date = new Date();
var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
var minuteAngle = 360 * date.getMinutes() / 60;
var secAngle = 360 * date.getSeconds() / 60;
var hour = document.querySelector('#hour >*');
var minute= document.querySelector('#minute >*');
var second = document.querySelector('#second >*');
hour.setAttribute('from', (hoursAngle));
hour.setAttribute('to', (hoursAngle+360));
minute.setAttribute('from', (minuteAngle));
minute.setAttribute('to', (minuteAngle+360));
second.setAttribute('from', (secAngle));
second.setAttribute('to', (secAngle+360));
console.log(date.toDateString());

document.querySelector('#date').textContent=date.toDateString();