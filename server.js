const http = require('http');
const server = http.createServer();

const port = process.env.PORT || 3001;

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Conectado!\n');
});

server.listen(port, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${port}`);
});