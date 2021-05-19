const schema = require('../model/userSchema');



//creating method for adding Contact Data
let userContact = async (name,number,mailId,description)=>{
    try{
    let status = await  schema({userName:name,userNumber:number,userMailId:mailId,userDescription:description}).save();
    return `Your response has submitted successfully`;
    }
    catch(error){
        return `your respose not submitted successfully ${error}`;


    }

}


module.exports={userContact}