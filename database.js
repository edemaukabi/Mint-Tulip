const mongoose = require("mongoose");

const connectDB = async () => {
  try {
      await mongoose.connect(
      process.env.MONGO_URI
      //     {
      //     useNewUrlParser: true,
      //     useUnifiedTopology: true,
      // }
    );
    console.log("Connection to database successful");
  } catch (err) {
    console.error("Connection to database failed: ")
  }
};

module.exports = connectDB
