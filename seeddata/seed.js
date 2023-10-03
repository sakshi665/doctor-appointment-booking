const mongoose = require("mongoose");
const Doctor = require("../models/doctorModel");
const mongoURI = "mongodb://localhost/your-database-name";
const seedData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    weeklySchedule: {
      Monday: {
        evening: {
          start: "17:00",
          end: "19:00",
        },
      },
      Tuesday: {
        evening: {
          start: "17:30",
          end: "18:30",
        },
      },
      Wednesday: {
        evening: {
          start: "18:00",
          end: "20:00",
        },
      },
      Thursday: {
        evening: {
          start: "17:00",
          end: "18:00",
        },
      },
      Friday: {
        evening: {
          start: "16:30",
          end: "18:30",
        },
      },
      Saturday: {
        evening: {
          start: "15:00 ",
          end: "16:00",
        },
      },
      Sunday: {
        evening: {
          start: "N/A",
          end: "N/A",
        },
      },
    },

    maxPatients: 10,
  },
  {
    id: 2,
    name: "Dr. Sam",
    specialty: "Neurologist",
    weeklySchedule: {
      Monday: {
        evening: {
          start: "17:00",
          end: "19:00",
        },
      },
      Tuesday: {
        evening: {
          start: "17:30",
          end: "18:30",
        },
      },
      Wednesday: {
        evening: {
          start: "18:00",
          end: "20:00",
        },
      },
      Thursday: {
        evening: {
          start: "17:00",
          end: "18:00",
        },
      },
      Friday: {
        evening: {
          start: "16:30",
          end: "18:30",
        },
      },
      Saturday: {
        evening: {
          start: "15:00 ",
          end: "16:00",
        },
      },
      Sunday: {
        evening: {
          start: "N/A",
          end: "N/A",
        },
      },
    },

    maxPatients: 10,
  },
  {
    id: 3,
    name: "Dr. Vivek",
    specialty: "Neurologist",
    weeklySchedule: {
      Monday: {
        evening: {
          start: "17:00",
          end: "19:00",
        },
      },
      Tuesday: {
        evening: {
          start: "17:30",
          end: "18:30",
        },
      },
      Wednesday: {
        evening: {
          start: "18:00",
          end: "20:00",
        },
      },
      Thursday: {
        evening: {
          start: "17:00",
          end: "18:00",
        },
      },
      Friday: {
        evening: {
          start: "16:30",
          end: "18:30",
        },
      },
      Saturday: {
        evening: {
          start: "15:00 ",
          end: "16:00",
        },
      },
      Sunday: {
        evening: {
          start: "N/A",
          end: "N/A",
        },
      },
    },

    maxPatients: 10,
  },
];
console.log("hello");
const seedDatabase = async () => {
  try {
    console.log("Connected to the database");
    await Doctor.deleteMany();
    await Doctor.insertMany(seedData);

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    mongoose.connection.close();
  }
};
module.exports = seedDatabase;
