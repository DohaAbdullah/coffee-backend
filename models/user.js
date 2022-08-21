const { Schema, model } = require("../database");
const jwt = require("jsonwebtoken");

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
  role: { type: String, default: "user" },
});

usersSchema.methods.createToken = function () {
  const token = jwt.sign(
    {
      id: this._id,
      email: this.email,
      role: this.role,
    },
    "this is my fucking secret"
  );
  return token;
};

const User = model("users", usersSchema);

module.exports = { User, usersSchema };
