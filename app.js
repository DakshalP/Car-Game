const express = require('express')
const app = express();
const socketIO = require('socket.io')

app.use(express.static('public'));



app.get('/', (req, res)=> {
    res.sendFile('/index.html')
})

app.get('/control', (req, res) => {
    res.sendFile(__dirname + "/public/controls/controls.html")
})


const server = app.listen(process.env.PORT || 4000, () => {
    console.log("Server started on 4000")
})

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Made socket connection ' + socket.id);

    socket.on('left', (data)=>{
        io.sockets.emit('left', data);
    })

    socket.on('right', (data)=>{
        io.sockets.emit('right', data);
    })
})