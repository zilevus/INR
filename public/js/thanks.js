$(window).load(function() {
	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
    // Thanks and then warns about induced error.
    if (loopNum == "3" || loopNum == "2") {
        $('#noticeContent').text("You will now repeat this activity with a different error");
    } else if (loopNum == "4"){
        $('#noticeContent').text("You will now complete a short survey about these tasks");
        $('#start').css('visibility', 'hidden');
        setTimeout(function(){
            window.location.href = '/survey';}, 3000);
    } else {
        $('#noticeContent').text("You will now repeat this activity again");
    }
	// Take the user to a survey, then renavigate
	// back to the initial page
	$('#start').on('click', function() {
		if (parseInt(loopNum) == 4) {
			window.location.href = '/survey/';
		} else {
			window.location.href = '/taskinit';
		}
	});


});
