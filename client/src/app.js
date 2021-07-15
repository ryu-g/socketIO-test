import "./main.sass"

const io = require('socket.io')(80)

const socket = io.connect('http://localhost:80')

//evenName"hello"監視
socket.on('hello', data => {
  // サーバから受け取ったデータを出力する
  console.log(data)
})

document.addEventListener('DOMContentLoaded', function(e) {
  document.getElementById('btn').addEventListener('click', function(e) {
    socket.emit('event', { date: new Date() })
  })
})