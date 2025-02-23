const announcementModel = require("../../models/announcement.model");

const addAnnouncementText = async (req, res) => {
  try {
    const { annoucementName } = req.body;
    const newlyCreatedAccouncement = new announcementModel({ annoucementName });
    await newlyCreatedAccouncement.save();
    res.status(201).json({
      success: true,
      message: "announcement successfully added",
      data: newlyCreatedAccouncement,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Some Error occured",
    });
  }
};

const deleteAnnouncementText = async (req, res) => {
  try {
    const { id } = req.params;
    await announcementModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "announcement deleted successfully added",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Some Error occured",
    });
  }
};

const getAllAnnouncement = async (req, res) => {
  try {
    const getall = await announcementModel.find({});
    res.status(200).json({
      success: true,
      message: "announcement Fetched successfully added",
      data: getall,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Some Error occured",
    });
  }
};

module.exports = {
  addAnnouncementText,
  deleteAnnouncementText,
  getAllAnnouncement,
};
