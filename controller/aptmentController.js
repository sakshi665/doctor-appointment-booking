const express = require("express");
const Doctor = require("../models/doctorModel");
const Appointment = require("../models/appointmentModel");
const expressAsyncHandler = require("express-async-handler");
const getAppointment = expressAsyncHandler(async (req, res) => {
  try {
    const { patientName, date } = req.body;
    console.log("hello");
    const id = req.params.id;
    console.log(id);
    const doctor = await Doctor.findOne({ id });
    console.log(doctor);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    if (doctor.appointments.length >= doctor.maxPatients) {
      return res
        .status(400)
        .json({ message: "Doctor has reached the maximum appointments limit" });
    }
    console.log(req.body.patientName);
    if (!req.body.date) {
      return res.status(400).json({ message: "Appointment date is required" });
    }
    console.log(hll)
    const receivedData = req.body;
    const requestedTime = new Date(receivedData.date);
    const requestedDay = requestedTime.getDay();
    if (
      requestedDay === 0 ||
      !doctor.weeklySchedule[
        requestedTime.toLocaleDateString("en-US", { weekday: "long" })
      ].evening
    ) {
      return res.status(400).json({ message: "Invalid appointment time" });
    }
    console.log(7);
    const startTime = new Date(
      doctor.weeklySchedule[
        requestedTime.toLocaleDateString("en-US", { weekday: "long" })
      ].evening.start
    );
    const endTime = new Date(
      doctor.weeklySchedule[
        requestedTime.toLocaleDateString("en-US", { weekday: "long" })
      ].evening.end
    );

    if (
      requestedTime < startTime ||
      requestedTime >= endTime ||
      requestedTime.getHours() < 12
    ) {
      return res.status(400).json({ message: "Invalid appointment time" });
    }

    doctor.appointments.push({
      date: requestedTime,
      patientName: req.body.patientName,
    });

    await doctor.save();
    const appointment = new Appointment({ doctorId: id, patientName, date });
    const AppointmentStatus = await appointment.save();
    res.status(201).json({ message: "Appointment created successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    } else if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid doctor ID" });
    } else {
      console.error("Error creating appointment:", error);
      res.status(500).json({ message: "Error creating appointment" });
    }
  }
});

module.exports = { getAppointment };
