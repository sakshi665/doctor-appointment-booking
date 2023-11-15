const expressAsyncHandler = require("express-async-handler");
const Doctor = require("../models/doctorModel");
const getDoctor = expressAsyncHandler(async (req, res) => {
  const doctor = await Doctor.find();
  const r1 = res.json(doctor);
});

const getDoctorById = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const doctor = await Doctor.findOne({ id });

    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    console.error("Error fetching doctor:", error);
    res.status(500).json({ error: "Error fetching doctor" });
  }
});
console.log(1);
console.log(8);
console.log(14);
module.exports = { getDoctorById, getDoctor };
