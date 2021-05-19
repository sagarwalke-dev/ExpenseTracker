const express = require("express")
const router = express.Router();

const crud = require("../controller/userController");

//EndPoint for adding data
router.post("/addContactData",function (req,res,next) {
     let status = crud.userContact(req.body.uName,req.body.uNumber,req.body.uMailId,req.body.uDescription);
    status.then(result =>{
        res.status(201).json({sucess:`${result}`});
    }).catch(result =>{
        res.status(204).json({Error:`${result}`});
    })

    
});


module.exports = router;
