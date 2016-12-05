$(window).load(function() {
	var socket = io();
	// session storage?
	// sets the initial exercise
	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
	if (loopNum == null) {
		loopNum = 0;
	} loopNum++;

	if (exerciseNum == null) {
		exerciseNum = 1;
	} if (loopNum == 5) {
		exerciseNum++;
		loopNum = 1;
	} // executes each cycle 4 times, two for the good runs, two for induced error.

    var retMsg = "{\"page\" : \"taskinit\", \"iteration\" : "+loopNum.toString()+"\"exercise\" : "+exerciseNum.toString()+ "}";
    socket.emit("json", retMsg);
	// sets the exercise picture equal to necessary number
	$('#objectsUsed').attr("src", "../img/empty/Ex"+exerciseNum.toString()+".png");

	sessionStorage.setItem("exerciseNum", exerciseNum.toString());
	sessionStorage.setItem("loopNum", loopNum.toString());
});
