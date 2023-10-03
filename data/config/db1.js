const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Expog_2001:Expog_2001@cluster0.acl3y.mongodb.net/MyData?retryWrites=true&w=majority";

const connectDB1 = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = connectDB1;
