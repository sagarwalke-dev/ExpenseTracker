//load modules.
const User = require("../model/userSchema");
const db = require("../services/database");
const bcrypt = require("bcrypt");

let userRegistration = async (req, res, next) => {
  const { name, email, contact, work, password, gender } = req.body;

  try {
    if (!name || !email || !contact || !work || !password || !gender) {
      return res.status(422).json({ error: "Please fill all data" });
    }
    const userExist = await User.findOne({ userEmail: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    //PASSWORD ENCRPTING
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    const user = new User({
      userName: name,
      userEmail: email,
      userContact: contact,
      userWork: work,
      userPassword: passwordHash,
      userGender: gender,
    });

    const response = await user.save();
    if (response) {
      return res.status(201).json({ message: "User registered successfully" });
    } else {
      return res.status(500).json({ error: "User registration failed" });
    }
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
    console.log(err);
  }
};

//Adding Expenses
let addExpenses = async (req, res, next) => {
  const { userEmail, itemName, category, amount, expenseDate } = req.body;
  console.log(userEmail, itemName, category, amount, expenseDate);

  //Adding based on perticuler user
  let validUser = await User.findOne({ userEmail: userEmail });
  if (validUser) {
    let expense = await validUser.generateAuthToken(
      itemName,
      category,
      amount,
      expenseDate
    );
    return res.status(200).json({ message: "Added successfully" });
  }
};

module.exports = { userRegistration, addExpenses };
