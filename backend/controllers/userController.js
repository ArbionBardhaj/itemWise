const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:"2d"})
}
//register user
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
  //check if user email or username already exists

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
  
  //encrypt password before saving to db
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)



  //create new user
  const user = await User.create({
    name,
    email,
    password:hashedPassword,
  });

  //generate token
  const token = generateToken(user._id)
  
  //send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly:true,
    expires: new Date(Date.now()+ 1000 * 172800), //2 days
    sameSite: "none",
    secure:true
  })

  if (user) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
      token
    });
  } else {
    res.status(400)
    throw new Error("invalid user data");
  }
});


//login uesr

const loginUser = asyncHandler(async (req, res)=>{
   res.send("login user")
})

module.exports = {
  registerUser,
  loginUser
};
