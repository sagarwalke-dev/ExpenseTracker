const enquirySchema = require("../model/enquirySchema");

//creating method for adding Contact Data
let userContact = async (name, number, mailId, description) => {
  try {
    let status = await enquirySchema({
      userName: name,
      userNumber: number,
      userMailId: mailId,
      userDescription: description,
    }).save();
    return `Your response has submitted successfully`;
  } catch (error) {
    return `Your response not submitted successfully ${error}`;
  }
};

module.exports = { userContact };
