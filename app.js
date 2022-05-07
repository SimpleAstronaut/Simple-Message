/*
* Simple-message-server
* v1.0.1_alpha_22050601
* SimpleAstronaut
*/
const { execFileSync } = require('child_process');
const express = require('express');
//const { fstat } = require('fs');
const fs = require('fs')
const app = express()
var exStatic=require("express-static");

//定义返回字符
var ret

//写入日志函数
function log(loginfo){
    loginfo = loginfo + "\n";
    fs.writeFile('./save/log.txt', loginfo,{ flag: 'a' } , err => {
        if (err) {
            console.error(err)
            return
        }
    });
    return 1;
}  

//主页面index路由
app.get('/', function(req, res) {
    ret = Date()+"-"+req.ip+"-主页面访问"
    res.sendFile(__dirname+"/public"+"/index.html");
    log(ret);
    console.log(ret);
});

//定义添加留言接口
app.get('/add', function(req, res) {
    var msg = req.query;
    
    //读取并写入json
    fs.readFile('./save/msg.json', 'utf8', (err, data) => {
        if(err) {
            console.error(err)
            return
        }
        data = eval("(" + data + ")");
        data.push(msg);
        data = JSON.stringify(data, null, "\t");
        fs.writeFile('./save/msg.json', data, err => {
            if(err) {
                console.error(err);
                return;
            }
        })
    })

    res.send('添加留言接口');
    ret = Date()+"-"+req.ip+"-添加留言请求";
    log(ret);
    console.log(ret);
});

//读取留言接口
app.get('/get', function(req, res) {
    fs.readFile('./save/msg.json', 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            return
        }
        data = eval("(" + data + ")");
        ret = Date()+"-"+req.ip+"-获取留言请求";
        log(ret);
        console.log(ret);
        res.send(data);
    })
})

//公开public目录
app.use(exStatic('./public'));

app.listen(8081,function() {
    ret = Date()+"-server-on";
    log(ret);
    console.log(ret);
})