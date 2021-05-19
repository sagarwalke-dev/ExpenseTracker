const http = require("http");
const app = require("./app");
const path = require("path");
const configEnv = require("dotenv");
const express = require("express");
const db = require("./services/database");

configEnv.config({
  path: path.join(__dirname, "config.env"),
});

const server = http.createServer(app);

//configure server port number
server.listen(process.env.PORT || 5000);

// step 3: Heroku

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
server.on("listening", () => {
  console.log(`server running at http://localhost:/5000`);
});
