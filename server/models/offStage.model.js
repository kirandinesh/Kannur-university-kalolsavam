const mongoose = require("mongoose");

const offStageSchema = new mongoose.Schema(
  {
    offStagecollegeName: { type: String, required: true, trim: true },
    offStagepoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offstage", offStageSchema);
