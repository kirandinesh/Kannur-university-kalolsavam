const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    annoucementName: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("announcementModel", announcementSchema);
