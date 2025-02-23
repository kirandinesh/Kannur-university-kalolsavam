const Result = require("../../models/result.model");
const College = require("../../models/colleges.model");

const addResult = async (req, res) => {
  try {
    const {
      studentName,
      studentCode,
      college,
      eventName,
      category,
      grade,
      points,
    } = req.body;

    if (
      !studentName?.trim() ||
      !college?.trim() ||
      !eventName?.trim() ||
      !category?.trim() ||
      !grade?.trim() ||
      points === undefined ||
      points === null ||
      isNaN(points)
    ) {
      return res.status(400).json({
        success: false,
        message: "Insufficient Data Provided",
      });
    }

    const studentAlreadyExist = await Result.findOne({
      $and: [{ studentName: studentName }, { eventName: eventName }],
    });
    if (studentAlreadyExist) {
      return res.status(400).json({
        success: false,
        message: "Student name Already Exist",
      });
    }

    const result = new Result({
      studentName,
      studentCode,
      college,
      eventName,
      category,
      grade,
      points: Number(points),
    });

    await result.save();

    if (result) {
      const updatedCollege = await College.findOneAndUpdate(
        { name: college },
        { $push: { studentsId: result._id } },
        { new: true }
      ).populate("studentsId");

      if (updatedCollege) {
        const totalPoints = updatedCollege.studentsId.reduce(
          (acc, student) => acc + student.points,
          0
        );

        await College.findOneAndUpdate(
          { name: college },
          { totalPoints: totalPoints },
          { new: true }
        );
      } else {
        return res.status(404).json({
          success: false,
          message: "College not found",
        });
      }
    }

    return res.status(201).json({
      success: true,
      message: "Result added successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getResult = async (req, res) => {
  try {
    const getAllResult = await Result.find({});
    return res.status(200).json({
      success: true,
      message: "Fetched All Results successfully",
      data: getAllResult,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { addResult, getResult };
