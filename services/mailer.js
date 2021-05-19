const dotenv = require("dotenv");
const mailer = require("nodemailer");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../config.env") });

let sendEmail = async (userEmail, name, subject, message) => {
  const transport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  var mailOption = {
    from: process.env.EMAIL_FROM,
    to: userEmail,
    subject: subject,
    text: `Hi ${name} \n ${message}`,
  };
  await transport.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log("Failed to send email" + error);
    } else {
      console.log("email sent successfully.");
    }
  });
};
module.exports = { sendEmail };
