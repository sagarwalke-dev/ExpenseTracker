const express = require("express");
const app = express();
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const db = require('./services/database')


app.use(cors());
app.use(express.json());
//configure router middleware here
<<<<<<< HEAD:server/app.js
var router=require('./routes/userRouter');
app.use('/',router);
=======
app.use('/',userRouter);

console.log("sagar test msg in app");
>>>>>>> dcd0c0585b58e5b24d3380c8da9b7a28311c939e:app.js
module.exports = app;
