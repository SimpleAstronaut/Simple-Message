function send(){
    var user = document.getElementById("user").value;
    var msg = document.getElementById("text").value;
    $.get("http://127.0.0.1/add", { user : user , msg :msg }, function( data ,status ){
        var sta = 1;
        if (sta ==1){
            alert(status);
        }
    })
}s