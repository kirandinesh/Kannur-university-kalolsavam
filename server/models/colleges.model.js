const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    totalPoints: { type: Number, default: 0, min: 0 },
    studentsId: [{ type: String, ref: "Winner" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("College", collegeSchema);
