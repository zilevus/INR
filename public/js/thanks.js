$(window).load(function() {
    var socket = io();
    	console.log("HERE first");
    	var taskLoad=false;
    	var socket=io();
    	var taskname=document.getElementById("taskName");
      var endTask="{\"type\" : \"endTask\"}";
      socket.emit("json", endTask);
    	socket.on('message',function(data){
    		console.log("HERE");
    		var html="";
    		if(data.message!=null){
    			var scoreresponse=JSON.parse(data.message);
          var s1 = scoreresponse.score1;
          var s2 = scoreresponse.score2;
          var s3 = scoreresponse.score3;
          var s4 = scoreresponse.score4;
          var s5 = scoreresponse.score5;
          var s6 = scoreresponse.score6;
          var avg = (Integer.parseInt(s1) + Integer.parseInt(s2) + Integer.parseInt(s3) + Integer.parseInt(s4) + Integer.parseInt(s5) + Integer.praseInt(s6)) / 6;

          document.getElementById("tg-s1").innerHTML = "Your Score    ";
          document.getElementById("tg-i1").innerHTML = scoreToValues(avg).response;
          //$("#prep").text(scoreresponse.toString());
          //$('#noticeContent').text(scoreresponse);


          console.log(scoreresponse);
    			//console.log(obj);
    			//alert(scoreresponse);
    		}else{
    			console.log("Problem",data);
    		}

    	});

      function scoreToValues(score){
    		console.log("scoreToValues");
    		var hex="";
    		var response="";
    		if(score==1){
    			hex="#eddb72";
    			response="Could improve";
    		}else if(score==2){
    			hex="#b3dd5f";
    			response="That was OK";
    		}else if(score==3){
    			response="Nicely Done";
    			hex="#55e5b5";
    		}else if(score==4){
    			response="Great Job";
    			hex="#27b4f2";
    		}else if(score==5){
    			response="Excellent work";
    			hex="#6b86db";
    		}else {
    			response="No score available";
    			hex="#ffffff";
    		}
    		return {
    			hex: hex,
    			response: response
    		};
	}

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
