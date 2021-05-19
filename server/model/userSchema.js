<<<<<<< HEAD
//load mongoose module.
const mongoose=require('mongoose');
const db=require('../services/database')
//creating userSchema
let userSchema=mongoose.Schema({
    userName:{type:String},
    userEmail:{type:String,require:true,unique:true},
    userContact:{type:Number},
    userWork:{type:String},
    userPassword:{type:String},
    userGender:{type:String}
    
})


//exporting by making public
module.exports=mongoose.model('userDetails',userSchema);
=======
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    userName : {type:String, require:true  },
    userNumber : {type:Number, require :true},
    userMailId : {type:String, require : true},
    userDescription :{type:String, require : true},
    dateAndTime : { type: Date,  default: Date.now() }
 });


 module.exports = mongoose.model("contactCollection",contactSchema);
>>>>>>> dcd0c0585b58e5b24d3380c8da9b7a28311c939e
