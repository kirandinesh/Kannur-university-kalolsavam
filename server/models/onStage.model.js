const mongoose = require("mongoose");

const onStageSchema = new mongoose.Schema(
  {
    onStagecollegeName: { type: String, required: true, trim: true },
    onStagepoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Onstage", onStageSchema);
