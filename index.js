const express = require("express");
const data = require("./data.json");
var cors = require("cors");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.send(data);
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
