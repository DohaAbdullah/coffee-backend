const { Schema, model } = require("../database");
const { productsSchema } = require("./products");

const categoriesSchema = new Schema({
  id: String,
  name: String,
  image: String,
  items: [productsSchema]
});

const Category = model("categories", categoriesSchema);

module.exports = { Category };
