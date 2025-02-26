const OffStage = require("../../models/offStage.model");

// Add a new college to OffStage
const addOffstageCollege = async (req, res) => {
  try {
    const { offStagecollegeName, offStagepoints } = req.body;

    if (!offStagecollegeName) {
      return res
        .status(400)
        .json({ success: false, message: "College name is required" });
    }

    const newCollege = new OffStage({ offStagecollegeName, offStagepoints });
    await newCollege.save();

    res.status(201).json({
      success: true,
      message: "College added successfully",
      data: newCollege,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Get all OffStage colleges
const getAllOffstageCollege = async (req, res) => {
  try {
    const colleges = await OffStage.find().sort({ offStagepoints: -1 }); // Sort by points descending
    res.status(200).json({
      success: true,
      message: "Colleges fetched successfully",
      data: colleges,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const deleteOffstageCollegeById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCollege = await OffStage.findByIdAndDelete(id);

    if (!deletedCollege) {
      return res
        .status(404)
        .json({ success: false, message: "College not found" });
    }

    res.status(200).json({
      success: true,
      message: "College deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  addOffstageCollege,
  getAllOffstageCollege,
  deleteOffstageCollegeById,
};
