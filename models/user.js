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
    require: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  phone: {
    type: Number,
    require: true,
  },
  address: String,
  city: String,
  postalCode: String,
});

const User = model("users", usersSchema);

module.exports = { User, usersSchema };
