const express = require("express");
const app = express();
const enquiryRouter = require("./routes/enquiryRouter");
const userRouter=require('./routes/userRouter')
const cors = require("cors");
const db = require("./services/database");

app.use(cors());
app.use(express.json());
//configure router middleware here

app.use("/", enquiryRouter);
app.use("/", userRouter);

module.exports = app;
