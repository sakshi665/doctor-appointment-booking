const express = require("express");
const app = express();
const list = require("./data/doctor");
const doctorRoute = require("./routes/doctorRoute");
const appointmentRoute = require("./routes/appointmentRoute");
const dotenv = require("dotenv");
const connectDB = require("./data/config/db");
const connectDB1 = require("./data/config/db1");

const seedDatabase = require("./seeddata/seed");
const Doctor = require("./models/doctorModel");
const { getDoctor, getDoctorById } = require("./controller/doctorController");

dotenv.config();

// connectDB1(seedDatabase);
// connectDB(seedDatabase);
connectDB1();
// if (seedDatabase) {
//   console.log(seedDatabase);
//   seedDatabase();
// }
// connectDB1(async () => {
//   // Now, define your routes and use the database connection
//   app.get("/api/doctors", async (req, res) => {
//     try {
//       // Fetch all doctors from the database

//       const doctors = await Doctor.find();
//       console.log(doctor);

//       // Return the list of doctors as JSON response
//       res.json(doctors);
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//       res.status(500).json({ error: "Error fetching doctors" });
//     }
//   });

//   // Define other routes and middleware...
// });

app.use("/api/doctors", doctorRoute);
app.use(express.json());
app.use("/api/doctors", appointmentRoute);

// app.use("/api/doctors", doctorRoute);
// app.get("/api/list", (req, res) => {
//   res.json(list);
// });
// app.get("/api/doctors/:id", (req, res) => {
//   const note = Doctor.find((n) => n.id == req.params.id);
//   res.json(note);
// });
// app.get("/", (req, res) => {
//   res.send("node");
// });
app.listen(8000, () => {
  console.log("listing");
});
// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const connectDB1 = require("./data/config/db1");
// const Doctor = require("./models/doctorModel");

// dotenv.config();

// // Connect to the database
// connectDB1(async (seedDatabase) => {
//   app.use("/api/doctors", doctorRoute);
// Define routes after the database connection is established

// Route to fetch a list of doctors
// app.get("/api/doctors", async (req, res) => {
//   try {
//     // Fetch all doctors from the database
//     const doctors = await Doctor.find();

//     // Return the list of doctors as JSON response
//     res.json(doctors);
//   } catch (error) {
//     console.error("Error fetching doctors:", error);
//     res.status(500).json({ error: "Error fetching doctors" });
//   }
// });

// Define other routes and middleware...

// Start the Express server
//   const PORT = process.env.PORT || 8000;
//   app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
//   });
// });
