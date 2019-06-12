const routes = require("express").Router();

const multer = require("multer");
const uploadConfig = require("./config/upload");
const upload = multer(uploadConfig);

const AppController = require("./app/controllers/AppController");
const PostController = require("./app/controllers/PostController");
const LikeController = require("./app/controllers/LikeController");

routes.get("/", AppController.status);
routes.get("/posts", PostController.index);
routes.post("/posts", upload.single("image"), PostController.store);
routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;
