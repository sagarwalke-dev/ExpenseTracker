const express = require("express");
const app = express();

app.use(express.json());
//configure router middleware here

module.exports = app;
