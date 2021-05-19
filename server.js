const http = require("http");
const app = require("./app");
const path = require("path");
const configEnv = require("dotenv");
const express = require("express");

configEnv.config({
  path: path.join(__dirname, "config.env"),
});

const server = http.createServer(app);

//configure server port number
server.listen(process.env.PORT || 5000);

server.on("listening", () => {
  console.log(`server running at http://localhost:5000`);
});
