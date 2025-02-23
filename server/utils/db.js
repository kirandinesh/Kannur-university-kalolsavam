const mongoose = require("mongoose");
const MONGO_DB_URI = process.env.MONGODB_URI;
module.exports = mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("MongoDb is Conntected");
  })
  .catch((err) => {
    console.log(err);
  });
