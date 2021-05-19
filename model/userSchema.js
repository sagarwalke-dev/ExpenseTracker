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