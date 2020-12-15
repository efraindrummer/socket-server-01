//servidor de express
const app = require('express')();

//servidor del socket
const server = require('http').createServer(app);

//configuracion del socket server
const io = require('socket.io')(server);

//conexion
io.on('connection', () => { /* … */ });
server.listen(8080, () => {
    console.log('Servidor corriendo en puerto: 8080');
});