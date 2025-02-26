const mongoose = require("mongoose");

const groupMemberResultSchema = new mongoose.Schema({
  memberName: { type: String },
});

const studentResultSchema = new mongoose.Schema({
  studentName: { type: String },
  studentCode: { type: String, trim: true },
  members: { type: [groupMemberResultSchema], default: [] },
  collegeName: { type: String },
  grade: { type: String },
  points: { type: Number },
});

const winnerSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      index: true,
    },
    groupGrade: { type: String },
    groupCollegeName: { type: String, index: true },
    groupPoints: { type: Number },
    firstPrize: { type: [studentResultSchema], default: [] },
    secondPrize: { type: [studentResultSchema], default: [] },
    thirdPrize: { type: [studentResultSchema], default: [] },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Winner", winnerSchema);
