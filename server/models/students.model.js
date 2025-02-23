const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  college: {
    type: String,
    required: true,
  },
  points: { type: Number, default: 0 },
  grade: String,
});

module.exports = mongoose.model("Student", StudentSchema);
 