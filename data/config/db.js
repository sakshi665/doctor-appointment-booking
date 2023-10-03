const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Expog_2001:Expog_2001@cluster0.acl3y.mongodb.net/MyData?retryWrites=true&w=majority";
const connectDB = async (seedDatabase) => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("seedingData");

    if (seedDatabase) {
      console.log("h3");
      await seedDatabase();
    }
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
  }
};
module.exports = connectDB;
