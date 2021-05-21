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
    userGender:{type:String},
    expenses: [
        {
          itemName: {type: String, require: true},
          category:{type: String},
          amount:{type: Number},
          expenseDate:{type: Date,Default:Date.now()}
        },
      ],
    
})

//Expenses Array
userSchema.methods.generateAuthToken = async function (itemName,category,amount,expenseDate) {
  try {
    console.log("inside Expenses array...")
    this.expenses = this.expenses.concat({ itemName: itemName,category: category,amount: amount,expenseDate:expenseDate});
    this.save();
  } catch (err) {
    console.log(err);
  }
};

//exporting by making public
module.exports=mongoose.model('userDetails',userSchema);