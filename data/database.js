const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "surveyheart",
  })
  .then(() => {
    console.log("Database is connected");
   
  })
  .catch((error) => console.log(error));
}

module.exports = connectDB;
