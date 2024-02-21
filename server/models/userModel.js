const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [30, "Name cannot exceed 30 charecters"],
    minLenght: [4, "Name should have more than 4 charecters"],
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    require: [true, "Please enter a password"],
  },
  phoneNumber: {
    type: Number,
    require: [false, "Please enter your phone number"],
  },
  dob: {
    type: Date,
    require: [false, "Please enter your date of birth"],
  },
  nationality: {
    type: String,
    require: [false, "Please enter your nationality"],
  },
  gender: {
    type: String,
    require: [false, "Please enter your gender"],
  },
  address: {
    type: String,
    require: [false, "Please enter your address"],
  },
  avtar: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  },
  isGoogleUser: {
    type: Boolean,
    require: [true, "Please state you are google user or not"],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
