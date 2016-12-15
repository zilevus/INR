var socket = io();

$(window).load(function() {
    var startTask="{\"type\" : \"startTask\", \"task\" : ";
    $(document).on("tap", function(){
        socket.emit("json", startTask);
    });
}
