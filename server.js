const express = require('express')
const {Server} = require('socket.io')


const PORT =5000

const app = express()

const httpServer = require('http').createServer(app)
const io = new Server(httpServer)

app.get(`/`,(req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

//chat event emitters
io.on('connection',(soc) =>{
    soc.on('send name', (username) => {
        io.emit('send name',(username))
    });

    soc.on('send message',(chat) => {
        io.emit('send message',(chat))
    })
})

httpServer.listen(PORT,()=>{
    console.log(`server is running @ http://localhost:${PORT}`)
})
