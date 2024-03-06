const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
    });
    console.log(`Mongo Connected ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

module.exports = connectDB;
