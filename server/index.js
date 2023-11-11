const express = require('express');
const http = require('http'); // import http module
const app = express();
const server = http.createServer(app); // create http server instance
const io = require('socket.io')(server, { // pass server instance to socket.io
        cors: { origin: "*" }
});

io.on('connection', (socket) => { 
    console.log('a user connected'); 
    socket.on('message', (message) => { 
        console.log(message); 
        io.emit('message', `<span style="background-color: #222; color: #fff; padding: 2px 4px; border-radius: 4px; display: inline-block;">${socket.id.substr(0,2)}:</span> <span style="background-color: #333; color: #fff; padding: 2px 4px; border-radius: 4px; display: inline-block; float: left;">${message}</span>`); 
    }); 
});

server.listen(8080, () => { // listen on server instead of app
        console.log('Server listening on port 8080');
});
