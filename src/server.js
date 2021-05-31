const express = require('express');
const server = express();
const routes = require('./routes.js');
const port = 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true}));

server.use(routes);




server.listen(port, console.log(`Aplicação ligada! acesse-a pelo link http://localhost:${port}/`))