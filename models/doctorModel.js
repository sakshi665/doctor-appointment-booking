const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  weeklySchedule: {
    Monday: {
      evening: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
    },
    Tuesday: {
      evening: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
    },
    Wednesday: {
      evening: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
    },
    Thursday: {
      evening: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
    },
    Friday: {
      evening: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
    },
    Saturday: {
      evening: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
    },
    Sunday: {
      evening: {
        start: {
          type: String,
          required: false,
        },
        end: {
          type: String,
          required: false,
        },
      },
    },
  },
  maxPatients: {
    type: Number,
    required: true,
  },
  appointments: [
    {
      date: Date,
      patientName: String,
    },
  ],
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
