
const http = require('http');
const app = require('./app');





const server =http.createServer();

server.listen(4500,console.log('app is running'));