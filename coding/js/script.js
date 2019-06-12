$(document).ready(function () {
	$(".dws-progress-bar").circularProgress({
		color: "#ff2110",
		line_width: 50,
		height: "900px",
		width: "900px",
		percent: 0,
		counter_clockwise: false,
		starting_position: 0
	}).circularProgress('animate', 100, 1000);
});

$(window).on('load', function () {
    var $preloader = $('#preloader');
    $preloader.delay(900).fadeOut('slow');
});    