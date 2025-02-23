const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema(
  {
    achievementName: { type: String, required: true, trim: true },
    studentName: { type: String, required: true, trim: true },
    collegeName: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AchievementModel", achievementSchema);
