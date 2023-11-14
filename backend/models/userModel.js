const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add a name"],
  },
  email: {
    type: String,
    required: [true, "please add an email"],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please enter an email"
    ],
    password: {
        type: String,
        required: [true, "please enter a password"],
        minLength: [8, "password must not be less than 8 characters"],
        maxLength: [23, "password must not be more than 23 characters"]

    },
    photo:{
        type: String, 
        required:[true, "please add a password"],
        default:"https://i.ibb.co/4pDNDk1/avatar.png"
    },
    phone:{
        type: String,
        default: "+355"
    },
    bio:{
        type: String,
        maxLength:[250, "bio must not be more than 250 characters"],
        default:"bio"
    
    }
  },
},{
    timestamps: true
});

const User = mongoose.model("user", userSchema);
module.exports = User;
