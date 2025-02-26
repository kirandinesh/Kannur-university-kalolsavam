const OnStage = require("../../models/onStage.model");

// Add a new college to OnStage
const addOnstageCollege = async (req, res) => {
  try {
    const { onStagecollegeName, onStagepoints } = req.body;

    if (!onStagecollegeName) {
      return res.status(400).json({ message: "College name is required" });
    }

    const newCollege = new OnStage({ onStagecollegeName, onStagepoints });
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

// Get all OnStage colleges
const getAllOnstageCollege = async (req, res) => {
  try {
    const colleges = await OnStage.find().sort({ onStagepoints: -1 }); // Sort by points descending
    res.status(200).json({
      success: true,
      message: "College Fetched successfully",
      data: colleges,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete an OnStage college by ID
const deleteOnstageCollegeById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCollege = await OnStage.findByIdAndDelete(id);

    if (!deletedCollege) {
      return res.status(404).json({ message: "College not found" });
    }

    res.status(200).json({
      success: true,
      message: "College deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  addOnstageCollege,
  getAllOnstageCollege,
  deleteOnstageCollegeById,
};
