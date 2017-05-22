$(document).ready(function(){

	// Taken from Handson in class 
	$(".picture").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".picture").removeClass("pic-click");

	});
});