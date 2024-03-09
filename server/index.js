const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer();

const io = new Server(server, {
    /* Configuración opcional de Socket.io */
  });
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
    socket.on('disconnect', () => {
      console.log('Un cliente se ha desconectado');
    });
})
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor Socket.io escuchando en el puerto ${PORT}`);
});