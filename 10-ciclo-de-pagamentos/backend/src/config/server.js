const bodyParser = require('body-parser');
const express = require('express');

const allowCors = require('./cors');
const queryParser = require('express-query-int');

const server = express();

// Middlewares

//requisição usa o bodyParser para interpretar quando vier no formato urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

//bodyParser intepreta formato json
server.use(bodyParser.json());

server.use(allowCors);
server.use(queryParser());

const PORT = 3003;
server.listen(PORT, () =>
  console.log(`~*~~*~~*~ BACKEND is running on PORT: ${PORT} ~*~~*~~*~`),
);

module.exports = server;
