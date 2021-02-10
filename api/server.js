const express = require("express");
const server = express();
const postRouter = require("./posts/posts-router");

server.use(express.json());
server.use("/api/post", postRouter);

module.exports = server;
