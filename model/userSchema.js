const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    userName : {type:String, require:true  },
    userNumber : {type:Number, require :true},
    userMailId : {type:String, require : true},
    userDescription :{type:String, require : true},
    dateAndTime : { type: Date,  default: Date.now() }
 });


 module.exports = mongoose.model("contactCollection",contactSchema);