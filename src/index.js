const http = require('http');
const path = require('path');

const express = require('express');
const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);

require('./sockets')(io);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting server
server.listen(3000, () => {
    console.log('Server on port 3000');
})