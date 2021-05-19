const express = require("express");
const router = express.Router();

const crud = require("../controller/enquiryController");

//EndPoint for adding data
router.post("/submitContact",function (req,res,next) {
  const {uName,uNumber ,uMailId, uDescription} = req.body;
  if(!uName || !uNumber || !uMailId || !uDescription)
  {
      res.status(422).json({ error: `Kindly fill all the details`});

  }
  else
  {

  
   let status = crud.addContactData(uName,uNumber,uMailId,uDescription);
  status.then(result =>{
      res.status(200).json({sucess:`${result}`});
  }).catch(result =>{
      res.status(204).json({error:`${result}`});
  })
}

  
});

module.exports = router;
