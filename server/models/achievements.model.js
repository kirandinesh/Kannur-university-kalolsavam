const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema(
  {
    achievementName: { type: String, required: true, trim: true },
    studentName: { type: String, trim: true },
    collegeName: { type: String, trim: true },
    points: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AchievementModel", achievementSchema);
