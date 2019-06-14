const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./routes');

class App {
  constructor() {
    this.app = app;
    this.server = server;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use((req, _, next) => {
      req.io = io;
      next();
    });
    this.app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().server;
