const express = require("express");
const app = express();

app.use(express.json());
//configure router middleware here

console.log("sagar test msg in app");
module.exports = app;
