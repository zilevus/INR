$(window).load(function() {
    var socket = io();
    var scoreresponse;
    	console.log("HERE first");
    	var taskLoad=false;
    	var socket=io();
    	var taskname=document.getElementById("taskName");
    	//socket.emit("endTask");
    	socket.on('message',function(data){
    		console.log("HERE");
    		var html="";
    		if(data.message!=null){
    			scoreresponse=JSON.parse(data.message);


          console.log(scoreresponse);
    			//console.log(obj);
    			//alert(scoreresponse);
    		}else{
    			console.log("Problem",data);
    		}

    	});

      document.getElementById("tg-s1").innerHTML = "speed";
      document.getElementById("tg-s2").innerHTML = "placement";
      document.getElementById("tg-s3").innerHTML = "task";
  /*    document.getElementById("tg-s4").innerHTML = "compensation";
      document.getElementById("tg-s5").innerHTML = "drop";
      document.getElementById("tg-s6").innerHTML = "path";*/
      document.getElementById("tg-i1").innerHTML = scoreresponse["score1"].toString();
      document.getElementById("tg-i2").innerHTML = scoreresponse["score2"].toString();
      document.getElementById("tg-i3").innerHTML = scoreresponse["score3"].toString();
    /*  document.getElementById("tg-i4").innerHTML = scoreresponse.score4;
      document.getElementById("tg-i5").innerHTML = scoreresponse.score5;
      document.getElementById("tg-i6").innerHTML = scoreresponse.score6;*/
      /*var scoreSets = ["speed", "placement", "task", "compensation", "drop", "path"];
      for (var i = 1; i <=6; i++) {
          var j = document.getElementById("tg-s"+i.toString());
          var k = document.getElementById("tg-i"+i.toString());
          j.innerHTML = scoreSets[i - 1];
          k.innerHTML = scoreresponse.scoreSets;
      }*/
      // speed, placement, task, compensation, drop, path


	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
    // Thanks and then warns about induced error.
    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"thanks\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //socket.emit("json", retMsg);
    if (loopNum == "3") {
        $('#noticeContent').text("You will now repeat this activity with a different error");
    } else if (loopNum == "2") {
        $('#noticeContent').text("You will now repeat this activity with an induced error");

    } else if (loopNum == "4"){
        $('#noticeContent').text("You will now complete a short survey about these tasks");
        $('#start').css('visibility', 'hidden');
        setTimeout(function(){
            window.location.assign('/survey');}, 3000);
    } else {
        $('#noticeContent').text("You will now repeat this activity again");
    }

	// Take the user to a survey, then renavigate
	// back to the initial page
	$('#start').on('click', function() {
		if (parseInt(loopNum) == 4) {
			window.location.assign('/survey/');
		} else {
			window.location.assign('/taskinit');
		}
	});


});
