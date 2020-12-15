//servidor de express
const express = require('express');
const app = express();

//servidor del socket
const server = require('http').createServer(app);

//configuracion del socket server
const io = require('socket.io')(server);

//desplegar el directorio public
app.use(express.static( __dirname + '/public'));
//conexion
io.on('connection', () => {
    console.log('cliente conectado!');
});
server.listen(8080, () => {
    console.log('Servidor corriendo en puerto: 8080');
});