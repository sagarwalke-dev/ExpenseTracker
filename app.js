const express = require("express");
const app = express();
const path = require("path");
const configEnv = require("dotenv");

configEnv.config({
  path: path.join(__dirname, "config.env"),
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const enquiryRouter = require("./routes/enquiryRouter");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const db = require("./services/database");

app.use(cors());
app.use(express.json());
//configure router middleware here

app.use("/", enquiryRouter);
app.use("/", userRouter);

module.exports = app;
