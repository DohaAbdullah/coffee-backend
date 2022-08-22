const express = require("express");
const data = require("./data.json");
var cors = require("cors");
const { Category } = require("./models/categories");
const { User } = require("./models/user");
const { Order } = require("./models/order");
const bcrypt = require("bcrypt");
const validateIt = require("./validateIt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
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

//this endpoint for admin dashboard
app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  res.send(allUsers);
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  User.findOne({ id: userId })
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.delete("/user", (req, res) => {
  User.deleteMany({ _id: req.body })
    .then((results) => {
      res.send({
        success: true,
        message: `${results.deletedCount} Users has been successfully deleted`,
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/users/:userEmail", (req, res) => {
  const { userEmail } = req.params;
  User.findOne({ email: userEmail })
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/user/register", (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const validationErrors = validateIt(req.body);
  if (validationErrors.length < 1) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      User.create({ email, password: hash, firstName, lastName })
        .then((results) => {
          res.send(results);
        })
        .catch((error) => {
          res.status(403).send({
            error: 403,
            errorDescription: "Mongoose error",
            errors: "This Email is used try another one!",
          });
        });
    });
  } else {
    res.status(401).send({
      errorDescription: "Validation errors",
      errors: validationErrors,
    });
  }
});

app.post("/user/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((results) => {
      if (!results) {
        res.status(404).send({
          error: 404,
          errorDescription: "Mongoose error",
          message: "user not found, please try another entries",
        });
      } else {
        bcrypt.compare(
          password,
          results.password,
          function (err, compareResult) {
            if (compareResult === true) {
              res.send({ success: true, token: results.createToken() });
            } else {
              res.status(401).send({
                success: false,
                errors: "password or email is incorrect",
              });
            }
          }
        );
      }
    })
    .catch((error) => {
      res.send({ errorDescription: "Database Error", error: error });
    });
});

app.post("/allUsers", (req, res) => {
  User.insertMany(req.body)
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/order", (req, res) => {
  const orderId = String(Math.floor(Math.random() * 899999 + 100000));
  Order.create({ ...req.body, orderId })
    .then((results) => {
      console.log(results);
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/orders", (req, res) => {
  Order.find()
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/order/:id", (req, res) => {
  const { id } = req.params;
  Order.findOne({ _id: id })
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/orders", (req, res) => {
  Order.deleteMany({ _id: req.body })
    .then((results) => {
      res.send({
        success: true,
        message: `${results.deletedCount} orders has been successfully deleted`,
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server running on port 5000");
});
