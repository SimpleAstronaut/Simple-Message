# Simple-Message 简单留言板
Release_v1.0.2正式版已经发布-2022-5-10
## 1.介绍
Simple-Message是我个人开发的一个业余小项目，目的是开发一个前后端分离的匿名留言系统。  
调用8081端口
## 2.功能
1.前后端分离，可按照api文档自行开发前端页面  
2.日志系统，可以在./save/log.txt 查看操作记录和响应日志  
3.不依赖MySQL数据库，直接储存在./save/msg.json中
## 3.技术栈
后端:node.js  
前端:html js css 可自行开发
## 4.安装
应用程序文件在 `app.js` 文件  
### 4.1 运行依赖
Simple-Message后端由node.js开发，因此，程序运行需要以下环境和依赖  
| 依赖项&运行环境 | 版本 | 简述 |
| ---- | ---- | ---- |
| node环境 | v16.15.0 | node.js运行环境 |
| express | \ | node.js web框架 |
以下为app.js文件引用代码：
``` javascript
const { execFileSync } = require('child_process');
const express = require('express');
const fs = require('fs')
const app = express()
var exStatic=require("express-static");
```
### 4.2 安装
#### 1.git安装
``` bash
git clone https://github.com/SimpleAstronaut/Simple-Message
cd ./
node app.js
```
#### 2.wget安装
```bash
# 暂未上线
```
