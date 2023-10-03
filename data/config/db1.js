// const mongoose = require("mongoose");
// // const Doctor1 = require("./models/doctorModel");
// const seedDatabase = require(".../seeddata/seed");
// const mongoURI =
//   "mongodb+srv://Expog_2001:Expog_2001@cluster0.acl3y.mongodb.net/MyData?retryWrites=true&w=majority";
// const connectDB1 = async (seedDatabase) => {
//   try {
//     // console.log(seedDatabase);
//     const conn = await mongoose.connect(mongoURI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       //   useCreateIndex: true,
//     });
//     console.log("seedingData");

//     if (seedDatabase) {
//       console.log("h3");
//       await seedDatabase();
//     }
//     console.log(`MongoDB Connected:${conn.connection.host}`);
//   } catch (error) {
//     console.log(`Error:${error.message}`);
//   }
// };
// module.exports = connectDB1;
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
    // if (seedDatabase && typeof seedDatabase === "function") {
    //   await seedDatabase();
    // }

    // if (seedDatabase) {
    //   console.log(seedDatabase);
    //   await seedDatabase();
    // }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = connectDB1;
