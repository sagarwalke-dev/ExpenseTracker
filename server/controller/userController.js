//load modules.
const person=require('../model/userSchema');
const db=require('../services/database');
const bcrypt=require('bcrypt');


//add book details
let addPerson=async(name,email,contact,work,password,gender)=>{
    try{
         //PASSWORD ENCRPTING
    const passwordHash=await bcrypt.hash(password,10);
    console.log(passwordHash)
   
    let add= await new person({userName:name,userEmail:email,userContact:contact,userWork:work,userPassword:passwordHash,userGender:gender}).save();
    return "Added Succesfully."
}
    catch(error){
        console.log('ERROR OCCURED :'+error);
    }
}

//export methods
module.exports={addPerson};