const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    studentCode: { type: String },
    college: {
      type: String,
      ref: "College",
      required: true,
    },
    eventName: { type: String, required: true },
    category: { type: String, required: true },
    grade: { type: String, required: true },
    points: { type: Number, required: true },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
