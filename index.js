const express = require("express");
const data = require("./data.json");
var cors = require("cors");
const { Category } = require("./models/categories");
const { User } = require("./models/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send(data);
});

app.post("/products", (req, res) => {
  const { category, item } = req.body;
  Category.findOne({ id: category })
    .then((results) => {
      results.items.push(item);
      results.save().then((saved) => {
        res.send({
          success: true,
          message: "Product added successfully",
          category: saved,
        });
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/products", (req, res) => {
  Category.find({})
    .distinct("items")
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/product/:productId", (req, res) => {
  const { productId } = req.params;
  Category.findOne({ "items._id": productId }, "items.$")
    .then((results) => {
      res.send(results.items[0]);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/categories", (req, res) => {
  Category.insertMany(req.body)
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/categories", async (req, res) => {
  const allCategories = await Category.find({});
  res.send(allCategories);
});

app.get("/categories/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  Category.findOne({ id: categoryId })
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/users", (req, res) => {
  User.insertMany(req.body)
    .then((results) => {
      console.log(req.body);
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  res.send(allUsers);
  console.log("get users details");
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  console.log(req.params);
  User.findOne({ id: userId })
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
