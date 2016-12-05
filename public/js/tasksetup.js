$(window).load(function() {
	//var socket = io();
	// session storage?
	// sets the initial exercise
	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
	// Because the first screen handles the getting of these variables in
	// session storage we can reuse them anywhere throughout the application
    var retMsg = "{\"page\" : \"taskinit\", \"iteration\" : "+loopNum.toString()+"\"exercise\" : "+exerciseNum.toString()+ "}";
    socket.emit("json", retMsg);
	// sets the exercise picture equal to necessary number
	$('#firstSetup').attr("src", "../img/startingpos/diagrams-start"+exerciseNum.toString()+".png");

});
