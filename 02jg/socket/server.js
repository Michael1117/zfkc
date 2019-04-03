const express = require('express');
const path = require('path')

const app = express();

// 使用静态文件中间件
app.use(express.static(path.resolve('public')))

const server = require('http').createServer(app);

server.listen(8080)

let io = require('socket.io')(server)
io.on('connection', function (socket) {
    console.log('连接成功');
    // 监听socket 的message 事件监听客户端传过来的消息
    socket.on('message', function (message) {
        console.log(message);
        socket.send('server:' + message)
    })
})