function send(){
    var user = document.getElementById("user").value;
    var msg = document.getElementById("text").value;
    $.get("http://127.0.0.1:8081/add", { user : user , msg :msg }, function( data ,status ){
        console.log(status);
    })
}

function re(){
    var msg;
    $.get("http://127.0.0.1:8081/get", function( data , status ) {
        num = Object.keys(data).length;//获取返回留言长度
        console.log(data[num]);
        var msg = data[0].user + data[0].msg + "-";
        for (var i=1; i < num; i++){
            msg = msg + data[i].user + data[i].msg + "-";
        }
        console.log(msg);
    })
}