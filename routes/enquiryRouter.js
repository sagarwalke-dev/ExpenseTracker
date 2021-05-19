const express = require("express");
const router = express.Router();

const crud = require("../controller/enquiryController");

//EndPoint for adding data
router.post("/submitContactUs", function (req, res, next) {
  let status = crud.userContact(
    req.body.uName,
    req.body.uNumber,
    req.body.uMailId,
    req.body.uDescription
  );
  status
    .then((result) => {
      res.status(201).json({ success: `${result}` });
    })
    .catch((result) => {
      res.status(204).json({ error: `${result}` });
    });
});

module.exports = router;
