const { Schema, model } = require("../database");

const productsSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  ingrediants: Array,
  description: String,
  image: String,
  price: Number,
  currency: String,
  sizes: Array,
  selectedSize: String,
  category: String,
  quantity: Number,
});

const Product = model("products", productsSchema);

module.exports = { Product, productsSchema };
