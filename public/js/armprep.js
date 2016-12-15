var socket = io();

function sendresponse() {
    var loopNum = sessionStorage.getItem("loopNum");
    var exerciseNum = sessionStorage.getItem("exerciseNum");
    var systemReady="{\"type\" : \"SystemReady\",\"task\" : " +exerciseNum.toString()+"}";
    socket.emit("json", systemReady);
}
