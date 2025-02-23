const AchievementModel = require("../../models/achievements.model");
const addNewAchievement = async (req, res) => {
  try {
    const { achievementName, studentName, collegeName } = req.body;

    if (!achievementName || !studentName) {
      return res.status(400).json({
        success: false,
        message: "Achievement name and student name are required.",
      });
    }

    const existAchievement = await AchievementModel.findOne({
      achievementName,
    });

    if (existAchievement) {
      return res.status(409).json({
        success: false,
        message: "Achievement already exists for this student.",
      });
    }

    const newAchievement = new AchievementModel({
      achievementName,
      studentName,
      collegeName,
    });
    await newAchievement.save();

    res.status(201).json({
      success: true,
      message: "New Achievement added successfully.",
      data: newAchievement,
    });
  } catch (err) {
    console.error("Error in addNewAchievement:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the achievement.",
    });
  }
};

const updateAchievementById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required",
      });
    }

    const updatedAchievement = await AchievementModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedAchievement) {
      return res.status(404).json({
        success: false,
        message: "Achievement Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Achievement Updated Successfully",
      data: updatedAchievement,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An Error Occurred",
    });
  }
};

const deleteAchievementById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Achievement ID is required.",
      });
    }

    const achievement = await AchievementModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Achievement deleted successfully.",
    });
  } catch (err) {
    console.error("Error in deleteAchievementById:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the achievement.",
    });
  }
};

const getAllAchievement = async (req, res) => {
  try {
    const achievements = await AchievementModel.find({});
    if (achievements.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No achievements found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Achievements fetched successfully.",
      data: achievements,
    });
  } catch (err) {
    console.error("Error in getAllAchievements:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching achievements.",
    });
  }
};

module.exports = {
  addNewAchievement,
  updateAchievementById,
  deleteAchievementById,
  getAllAchievement,
};
