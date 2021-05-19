const express = require("express");
const app = express();
const userRouter = require("./routes/enquiryRouter");
const cors = require("cors");
const db = require("./services/database");

app.use(cors());
app.use(express.json());
//configure router middleware here
app.use("/", userRouter);

module.exports = app;
