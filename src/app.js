const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

class App {
  constructor() {
    this.server = server;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    app.use(cors());
    app.use(express.json());
    app.use(morgan("dev"));
    app.use((req, _, next) => {
      req.io = io;
      next();
    });
    app.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads", "resized"))
    );
  }

  routes() {
    app.use(require("./routes"));
  }
}

module.exports = new App().server;
