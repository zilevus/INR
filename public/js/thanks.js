$(window).load(function() {
	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");

	// Take the user to a survey, then renavigate 
	// back to the initial page
	$('#start').on('click', function() {
		if (parseInt(loopNum) == ) {
			window.location.href = '/survey/';
		} else {
			window.location.href = '/taskinit';
		}
	});
	

});