const mongoose = require("mongoose");

const enquirySchema = mongoose.Schema({
  userName: { type: String, require: true },
  userNumber: { type: Number, require: true },
  userMailId: { type: String, require: true },
  userDescription: { type: String, require: true },
  submittedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("enquiry", enquirySchema);
