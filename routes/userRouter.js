//load modules
var express = require('express');
const app=express();
var router = express.Router();
const userController=require('../controller/userController');

//Home page route.
router.get('/', function (req, res) {
    console.log("inside home")  
    
});

//registration route
router.post("/registration", function (req, res, next) {
    console.log("start registering  new user...");
    userController.userRegistration(req, res, next);
    console.log("end registering  new user...");
  });

  //Adding Expenses
  router.post("/addingExpenses",function(req,res,next)
  {
    console.log("Adding Expenses...");
    userController.addExpenses(req,res,next)
    console.log("Adding Complited...");
  })

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
