const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://root:root@clusterpizza.bxc1z.mongodb.net/mern-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongodb Connection Successful`);
});

db.on("error", () => {
  console.log(`Mongodb connection Failed`);
});

module.exports = mongoose;
