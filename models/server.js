const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');
const Sockets  = require('./sockets');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //creacion de http server
        this.server = http.createServer(this.app);

        //configuracion de los sockets
        this.io = socketio(this.server, { /* configuraciones del socket server */});
    }

    middlewares(){
        //desplegar el directorio public
        this.app.use(express.static( path.resolve( __dirname + '../../public') ));
        //habilitar cors
        this.app.use(cors());
    }

    configurarSockets(){
        new Sockets(this.io); 
    }

    execute(){
        //inicia el middleware
        this.middlewares();
        //iniciar socket
        this.configurarSockets();
        //inicializar el servidor
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;