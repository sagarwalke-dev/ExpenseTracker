const express = require("express")
const router = express.Router();

const crud = require("../controller/userController");

//EndPoint for adding data
router.get("/addContactData",function (req,res,next) {
     let status = crud.userContact(req.query.uName,req.query.uNumber,req.query.uMailId,req.query.uDescription);
    status.then(result =>{
        res.status(201).json({sucess:`${result}`});
    }).catch(result =>{
        res.status(204).json({Error:`${result}`});
    })

    
});


module.exports = router;
