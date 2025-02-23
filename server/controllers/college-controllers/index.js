const College = require("../../models/colleges.model");

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

module.exports = { addCollege, getAllCollege };
