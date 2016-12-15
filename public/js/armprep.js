var socket = io();
var cont = false;
$(window).load(function() {
  socket.on('message',function(data){
      console.log("HERE");
      var html="";
      if(data.message!=null){
          var ready=JSON.parse(data.message);
          if (ready.error1 == ready.error2 && ready.error2 == ready.error3 && ready.error3 == ready.error1 && ready.error1 == 1) {
              cont = true;
          }
          //console.log(obj);
          //alert(scoreresponse);
      }else{
          console.log("Problem",data);
      }

  });
});

function sendresponse() {
    var loopNum = sessionStorage.getItem("loopNum");
    var exerciseNum = sessionStorage.getItem("exerciseNum");
    if (cont) {
      var systemReady="{\"type\" : \"SystemReady\",\"task\" : " +exerciseNum.toString()+"}";
      socket.emit("json", systemReady);
      window.location.assign('/preactivity/')
    }
}
