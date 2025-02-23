const Event = require("../../models/events.model");
const College = require("../../models/colleges.model");
const Winner = require("../../models/winner");
const searchEvents = async (req, res) => {
  try {
    const { keyword } = req.params;
    if (!keyword || typeof keyword !== "string") {
      return res.status(400).json({
        success: false,
        message: "Keyword is required and must be in string format",
      });
    }

    const regEx = new RegExp(keyword, "i");
    const createSearchQurey = {
      $or: [{ name: regEx }, { category: regEx }],
    };

    const searchResult = await Event.find(createSearchQurey);
    res.status(200).json({
      success: true,
      data: searchResult,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "some error",
    });
  }
};

const searchCollege = async (req, res) => {
  try {
    const { keyword } = req.params;
    if (!keyword || typeof keyword !== "string") {
      return res.status(400).json({
        success: false,
        message: "Keyword is required and must be in string format",
      });
    }
    const regEx = new RegExp(keyword, "i");
    const createSearchQurey = { name: regEx };
    const searchResult = await College.find(createSearchQurey);
    res.status(200).json({
      success: true,
      data: searchResult,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "some error",
    });
  }
};

const searchWinnerListItem = async (req, res) => {
  try {
    const { keyword } = req.params;
    if (!keyword || typeof keyword !== "string") {
      return res.status(400).json({
        success: false,
        message: "Keyword is required and must be in string format",
      });
    }
    const regEx = new RegExp(keyword, "i");
    const createSearchQurey = { eventName: regEx };
    const searchResult = await Winner.find(createSearchQurey);
    res.status(200).json({
      success: true,
      data: searchResult,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "some error",
    });
  }
};

module.exports = { searchEvents, searchCollege, searchWinnerListItem };
