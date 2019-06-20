const express = require("express");

const server = express();

const something = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/something", (req, res) => {
  res.status(200).json(something);
});

module.exports = server;
