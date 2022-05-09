function send(){
    var user = document.getElementById("user").value;
    var msg = document.getElementById("text").value;
    $.get("http://127.0.0.1:8081/add", { user : user , msg :msg }, function( data ,status ){
        console.log(status);
        location.reload();
    })
}

function re(){
    location.reload();
    /*$.get("http://127.0.0.1:8081/get", function( data , status ) {
        num = Object.keys(data).length;//获取返回留言长度
        //var msg = data[0].user + ":" + data[0].msg + "\n";
        for (var i=1; i < num; i++){
            var msg = msg + data[i].user + ":" + data[i].msg + "\n";
        }
        console.log(msg);
        //document.getElementById('msg').innerHTML = msg;
    })*/
}

window.onload = function(){
    console.log("test");
    $.get("http://127.0.0.1:8081/get", function( data , status ) {
        num = Object.keys(data).length;//获取返回留言长度
        //var msg = data[0].user + data[0].msg + "\n";
        for (var i=num-1; i >= 0; i--){
            var msgstr = document.createElement('DIV');
            var msguser = document.createElement('DIV');
            var msgtext = document.createElement('DIV');
            var br = document.createElement('BR');
            msgstr.className = 'card';
            msgstr.id = i;
            
            msguser.className = 'card-header';
            msguser.id = 'msguser'+ i;
            msguser.textContent = data[i].user;
            
            msgtext.className = 'card-body';
            msgtext.id = 'msgtext'+ i;
            msgtext.textContent = data[i].msg;
            
            msgstr.appendChild(msguser);
            msgstr.appendChild(msgtext);

            document.getElementById("message").appendChild(msgstr);
            document.getElementById("message").appendChild(br);
        }
    })
}