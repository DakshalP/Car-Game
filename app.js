const express = require('express')
const app = express();
const socketIO = require('socket.io')

app.use(express.static('public'));

const server = app.listen(4000, () => {
    console.log("Server started on 4000")
})

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Made socket connection ' + socket.id);
})