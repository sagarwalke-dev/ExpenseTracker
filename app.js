const express = require("express");
const app = express();
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const db = require('./services/database')


app.use(cors());
app.use(express.json());
//configure router middleware here
app.use('/',userRouter);

console.log("sagar test msg in app");
module.exports = app;
