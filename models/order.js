const { Schema, model } = require("../database");
const { productsSchema } = require("./products");

const orderSchema = new Schema({
  orderId: { type: String, require: true, unique: true, dropDups: true },
  products: [productsSchema],
  shippingInfo: {
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
      lowercase: true,
      required: "Email address is required",
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      minlength: 11,
      require: true,
    },
    address: String,
    city: String,
    postalCode: String,
  },
});

const Order = model("orders", orderSchema);

module.exports = { Order, orderSchema };
