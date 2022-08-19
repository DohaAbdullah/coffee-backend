const { Schema, model } = require("../database");

const usersSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    index: { unique: true, dropDups: true },
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
   
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    minlength: 11,
  },
  address: String,
  city: String,
  postalCode: String,
});

const User = model("users", usersSchema);

module.exports = { User, usersSchema };
