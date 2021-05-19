<<<<<<< HEAD
//load modules
var express = require('express');
const app=express();
var router = express.Router();
const userController=require('../controller/userController');

//Home page route.
router.get('/', function (req, res) {
    console.log("inside home")  
    
});

//add user endpoint
router.post('/addPerson', function (req, res) {
res.setHeader('Content-Type','application/json')
 console.log("inside register up get")
 
 console.log(req.body.name,req.body.email,req.body.contact,req.body.work,req.body.password,req.body.gender)
 const addStatus=userController.addPerson(req.body.name,req.body.email,req.body.contact,req.body.work,req.body.password,req.body.gender)
 addStatus.then(result=>{
    res.json(result);
 } ) .catch(error=> console.log(error))
})


//exporting
module.exports=router;
=======
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
>>>>>>> dcd0c0585b58e5b24d3380c8da9b7a28311c939e
