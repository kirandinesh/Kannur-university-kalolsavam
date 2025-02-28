const College = require("../../models/colleges.model");
const Winner = require("../../models/winner");
const addCollege = async (req, res) => {
  try {
    const colleges = req.body;

    for (let college of colleges) {
      if (!college.name) {
        return res.status(400).json({
          success: false,
          message: "Each college must have a name.",
        });
      }
    }

    const insertedColleges = await College.insertMany(colleges);

    res.status(200).json({
      success: true,
      message: "Colleges added successfully",
      data: insertedColleges,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

const getAllCollege = async (req, res) => {
  try {
    const fetchCollegeDetails = await College.find({}).sort({
      totalPoints: -1,
    });

    return res.status(200).json({
      success: true,
      message: "Fetched All College successfully",
      data: fetchCollegeDetails,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const addTotalPointValue = async (req, res) => {
  try {
    const { collegeName, points } = req.body;

    if (
      !collegeName ||
      typeof collegeName !== "string" ||
      typeof points !== "number"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid input. Provide a valid collegeName (string) and points (number).",
      });
    }

    const updatedCollege = await College.findOneAndUpdate(
      { name: collegeName },
      { $inc: { totalPoints: points } },
      { new: true }
    );

    if (!updatedCollege) {
      return res.status(404).json({
        success: false,
        message: "College not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Updated College points successfully",
      data: updatedCollege,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const reduceTotalPointValue = async (req, res) => {
  try {
    const { collegeName, points } = req.body;

    if (!collegeName || typeof points !== "number") {
      return res.status(400).json({
        success: false,
        message: "Invalid input. Provide name and points as a number.",
      });
    }

    const updatedCollege = await College.findOneAndUpdate(
      { name: collegeName },
      { $inc: { totalPoints: -points } },
      { new: true }
    );

    if (!updatedCollege) {
      return res.status(404).json({
        success: false,
        message: "College not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Reduced College points successfully",
      data: updatedCollege,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const updateCollegeWithEvents = async (req, res) => {
  try {
    const colleges = await College.find({});

    for (const college of colleges) {
      const winners = await Winner.find({
        $or: [
          { "firstPrize.collegeName": college.name },
          { "secondPrize.collegeName": college.name },
          { "thirdPrize.collegeName": college.name },
        ],
      });

      const eventNames = winners.map((winner) => winner.eventName);

      await College.findOneAndUpdate(
        { name: college.name },
        { $addToSet: { eventName: { $each: eventNames } } },
        { new: true }
      );
    }

    res.status(200).json({
      success: true,
      message: "Updated colleges with event names successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
module.exports = {
  addCollege,
  getAllCollege,
  addTotalPointValue,
  reduceTotalPointValue,
  updateCollegeWithEvents,
};
