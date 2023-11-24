const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs")

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please filll in all required fields");
  }
  if (password.length < 8) {
    res.status(400);
    throw new Error("password must be more than 8 characters");
  }
  //check if user email already exists

  const userEmailExists = await User.findOne({ email });

  if (userEmailExists) {
    res.status(400);
    throw new Error("The email is already used");
  }

  const userNameExists = await User.findOne({name});

  if(userNameExists){
    res.status(400);
    throw new Error("This username is already in use")
  }
  //check if the user name already exists 
  
  //encrypt password before saving to db
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)


  //create new user
  const user = await User.create({
    name,
    email,
    password:hashedPassword,
  });

  if (user) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
    });
  } else {
    res.status(400)
    throw new Error("invalid user data");
  }
});

module.exports = {
  registerUser,
};
