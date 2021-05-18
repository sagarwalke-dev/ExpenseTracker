const Mail = require("./services/mailer");

Mail.sendEmail(
  "sagarwalke7030@gmail.com",
  "Sagar",
  "TestMail",
  "this a test mail from node"
);
