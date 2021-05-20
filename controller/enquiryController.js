const enquirySchema = require("../model/enquirySchema");
const Mail = require("../services/mailer");

//creating method for adding Contact Data
let addContactData = async (name, number, mailId, description) => {
  try {
    let status = await enquirySchema({
      userName: name,
      userNumber: number,
      userMailId: mailId,
      userDescription: description,
    }).save();
    //using mail services
    let subject = `Your enquiry submitted`;
    let body = `Thanks for being awesome!

    We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. 
    
    Otherwise, we will reply by email as soon as possible.
    
    Talk to you soon, Expense Tracker`;
    Mail.sendEmail(mailId, name, subject, body);
    return `Your response has submitted successfully`;
  } catch (error) {
    return `Your response not submitted successfully ${error}`;
  }
};

module.exports = { addContactData };
