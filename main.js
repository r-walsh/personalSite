$(".nav-item").mouseenter(function() {
	$(this).stop(true, true).animate({
		fontSize: "+=9"
	});
	$(this).css("background-color", "#ffcc5c");
});
$(".nav-item").mouseleave(function() {
	$(this).stop(true, true).animate({
		fontSize: "-=9"
	});
	$(this).css("background-color", "#ff6f69");
});