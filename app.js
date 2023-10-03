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
// connectDB(seedDatabase);
connectDB1();
app.use("/api/doctors", doctorRoute);
app.use(express.json());
app.use("/api/doctors", appointmentRoute);
app.listen(8000, () => {
  console.log("listing");
});
