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