const express = require("express");
const { getAppointment } = require("../controller/aptmentController");
const router = express.Router();
router.post("/:id/appointments", getAppointment);
module.exports = router;
