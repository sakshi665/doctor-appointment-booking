const express = require("express");
const { getDoctor, getDoctorById } = require("../controller/doctorController");
const router = express.Router();
router.get("/:id", getDoctorById);
router.get("/", getDoctor);
module.exports = router;
