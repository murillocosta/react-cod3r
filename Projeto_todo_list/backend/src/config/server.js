const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors/cors');

const server = express();

//MIDDLEWARES
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
server.use(bodyParser.json());
server.use(allowCors);

const port = 3003;
server.listen(port, _ => console.log(`BACKEND is running on PORT: ${port}.`));

module.exports = server;
