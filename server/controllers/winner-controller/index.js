const College = require("../../models/colleges.model");
const Winner = require("../../models/winner");
const mongoose = require("mongoose");

const addWinner = async (req, res) => {
  try {
    const {
      eventName,
      groupPoints = 0,
      groupCollegeName = "",
      groupGrade = "",
      firstPrize = [],
      secondPrize = [],
      thirdPrize = [],
    } = req.body;

    const isEventExist = await Winner.findOne({ eventName });
    if (isEventExist) {
      return res.status(409).json({
        success: false,
        message: "Event name already exists",
      });
    }

    const newWinner = new Winner(req.body);
    const saveWinner = await newWinner.save();

    const allStudents = [
      ...(saveWinner.firstPrize || []),
      ...(saveWinner.secondPrize || []),
      ...(saveWinner.thirdPrize || []),
    ];

    const collegeUpdates = {};

    allStudents.forEach((student) => {
      if (!collegeUpdates[student.collegeName]) {
        collegeUpdates[student.collegeName] = {
          studentIds: [],
          totalPoints: 0,
        };
      }
      collegeUpdates[student.collegeName].studentIds.push(student._id);
      collegeUpdates[student.collegeName].totalPoints += student.points || 0;
    });

    if (groupPoints > 0) {
      Object.keys(collegeUpdates).forEach((collegeName) => {
        collegeUpdates[collegeName].totalPoints += groupPoints;
      });
    }

    const bulkUpdates = Object.entries(collegeUpdates).map(
      ([collegeName, { studentIds, totalPoints }]) => ({
        updateOne: {
          filter: { name: collegeName },
          update: {
            ...(studentIds.length > 0 && {
              $push: { studentsId: { $each: studentIds } },
            }),
            ...(totalPoints > 0 && { $inc: { totalPoints } }),
          },
        },
      })
    );

    if (bulkUpdates.length > 0) {
      await College.bulkWrite(bulkUpdates);
    }

    if (groupCollegeName) {
      const studentIds = allStudents.map((student) => student._id);
      await College.updateOne(
        { name: groupCollegeName },
        {
          $push: { studentsId: { $each: studentIds } },
          $inc: { totalPoints: groupPoints },
        }
      );
    }

    res.status(201).json({
      success: true,
      message: "Winner Saved Successfully",
      data: saveWinner,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Some Error Occurred",
      error: err.message,
    });
  }
};

const getAllWinner = async (req, res) => {
  try {
    const winners = await Winner.find({}).sort({ publishedAt: -1 });

    res.status(200).json({
      success: true,
      message: "Winners Fetched Successfully",
      data: winners,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Some Error Occurred",
      error: err.message,
    });
  }
};

const updateWinner = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const existingWinner = await Winner.findById(id);
    if (!existingWinner) {
      return res
        .status(404)
        .json({ success: false, message: "Winner not found" });
    }

    const oldStudents = [
      ...(existingWinner.firstPrize || []),
      ...(existingWinner.secondPrize || []),
      ...(existingWinner.thirdPrize || []),
    ];

    const newStudents = [
      ...(updatedData.firstPrize || []),
      ...(updatedData.secondPrize || []),
      ...(updatedData.thirdPrize || []),
    ];

    const studentUpdates = {};

    oldStudents.forEach((oldStudent) => {
      const newStudent = newStudents.find(
        (s) => String(s._id) === String(oldStudent._id)
      );

      if (newStudent) {
        const pointDiff = newStudent.points - oldStudent.points;

        if (oldStudent.collegeName !== newStudent.collegeName) {
          studentUpdates[oldStudent.collegeName] = studentUpdates[
            oldStudent.collegeName
          ] || { add: [], remove: [], points: 0 };
          studentUpdates[oldStudent.collegeName].remove.push(oldStudent._id);
          studentUpdates[oldStudent.collegeName].points -= oldStudent.points;

          studentUpdates[newStudent.collegeName] = studentUpdates[
            newStudent.collegeName
          ] || { add: [], remove: [], points: 0 };
          studentUpdates[newStudent.collegeName].add.push(newStudent._id);
          studentUpdates[newStudent.collegeName].points += newStudent.points;
        } else {
          studentUpdates[oldStudent.collegeName] = studentUpdates[
            oldStudent.collegeName
          ] || { add: [], remove: [], points: 0 };
          studentUpdates[oldStudent.collegeName].points += pointDiff;
        }
      } else {
        studentUpdates[oldStudent.collegeName] = studentUpdates[
          oldStudent.collegeName
        ] || { add: [], remove: [], points: 0 };
        studentUpdates[oldStudent.collegeName].remove.push(oldStudent._id);
        studentUpdates[oldStudent.collegeName].points -= oldStudent.points;
      }
    });

    newStudents.forEach((newStudent) => {
      if (
        !oldStudents.some(
          (oldStudent) => String(oldStudent._id) === String(newStudent._id)
        )
      ) {
        studentUpdates[newStudent.collegeName] = studentUpdates[
          newStudent.collegeName
        ] || { add: [], remove: [], points: 0 };
        studentUpdates[newStudent.collegeName].add.push(newStudent._id);
        studentUpdates[newStudent.collegeName].points += newStudent.points;
      }
    });

    const collegeUpdates = [];

    for (const [collegeName, { add, remove, points }] of Object.entries(
      studentUpdates
    )) {
      if (points !== 0) {
        collegeUpdates.push({
          updateOne: {
            filter: { name: collegeName },
            update: { $inc: { totalPoints: points } },
          },
        });
      }
      if (remove.length > 0) {
        collegeUpdates.push({
          updateOne: {
            filter: { name: collegeName },
            update: { $pull: { studentsId: { $in: remove } } },
          },
        });
      }
      if (add.length > 0) {
        collegeUpdates.push({
          updateOne: {
            filter: { name: collegeName },
            update: { $push: { studentsId: { $each: add } } },
          },
        });
      }
    }

    if (collegeUpdates.length > 0) await College.bulkWrite(collegeUpdates);

    const updatedWinner = await Winner.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Winner updated successfully",
      data: updatedWinner,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred",
      error: err.message,
    });
  }
};

const getWinnerDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const winnerDetails = await Winner.findById(id);
    if (!winnerDetails) {
      res.status(404).json({
        success: false,
        message: "Course Not Found!",
      });
    }
    res.status(201).json({
      success: true,
      message: "Course Details Fetched SuccessFully",
      data: winnerDetails,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "some Error Occured",
    });
  }
};

module.exports = {
  addWinner,
  getAllWinner,
  updateWinner,
  getWinnerDetailsById,
};
