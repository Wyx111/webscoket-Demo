var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var config = require('./webpack.config');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var compiler = webpack(config);
// 托管静态文件
app.use(express.static(path.join(__dirname,'/')))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

// 在线用户
var onlineUsers = {};
// 在线用户人数
var onlineCount = 0;

io.on('connection', function (socket) {
   socket.on('login',function(obj){
    console.log(obj)
   })
})

server.listen(3000, function () {
    console.log('3000端口已被打开');
})