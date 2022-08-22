const mongoose = require("mongoose");
//connection URL
mongoose.connect(
  "mongodb+srv://do7a_ab:999998997@cluster0.gmcnw8j.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = mongoose;
