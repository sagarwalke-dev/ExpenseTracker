const express = require("express");
const app = express();

app.use(express.json());
//configure router middleware here
var router=require('./routes/userRouter');
app.use('/',router);
module.exports = app;
