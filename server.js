//*keyWords:      //callbacks and recieving //*connection
//clientToClient  //socket.on               //io.on
//clientToServer  //socket.emit
//serverToClient  //socket.broadcast.emit


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port);
const io = require('socket.io')(server);

app.use(express.static('client'));

//The 'connection' is a reserved event name in socket.io
//For whenever a connection is established between the server and a client
io.on('connection', (socket) => {
    //Displaying a message on the terminal
    console.log('a user connected');
    
    //Sending a greeting message to the client
    socket.emit('serverToClient', "Server: Hello, client!");

    socket.on('clientToClient', data => {
        console.log(data);
        socket.broadcast.emit('serverToClient', data);
    })
});