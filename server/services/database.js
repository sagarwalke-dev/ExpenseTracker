const mongoose = require("mongoose");
const path = require("path");
const configEnv = require("dotenv").config({
  path: path.join(__dirname, "../config.env"),
});
//connection url
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.jjokg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

//create connection with db
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection success");
  })
  .catch((err) => {
    console.log(`Database connection failed.\n${err}`);
  });
