var socket = io();
$(window).load(function() {
    function sendresponse() {
        var systemReady="{\"type\" : \"SystemReady\",\"task\" : ";
        socket.emit("json", systemReady);
    };
}
