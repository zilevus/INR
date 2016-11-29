$(window).load(function() {
	//var socket = io();
	// session storage?
	// sets the initial exercise
	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
	// Because the first screen handles the getting of these variables in 
	// session storage we can reuse them anywhere throughout the application
	console.log("loopNum - " + loopNum + "exerciseNum - " + exerciseNum);
	// sets the exercise picture equal to necessary number
	$('#videoDiag').attr("src", "../img/movies/INR-Exercise"+exercise.toString()+".MOV"
);

});