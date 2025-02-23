const College = require("../../models/colleges.model");
const Winner = require("../../models/winner");
const mongoose = require("mongoose");

const addWinner = async (req, res) => {
  try {
    const { eventName, groupPoints = 0, groupCollegeName } = req.body;

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
    const winners = await Winner.find({});

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
    const { groupPoints = 0, groupCollegeName } = req.body;
    const updatedData = req.body;

    const existingWinner = await Winner.findById(id);
    if (!existingWinner) {
      return res.status(404).json({
        success: false,
        message: "Winner not found",
      });
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

    const oldCollegeName = existingWinner.groupCollegeName;
    const newCollegeName = groupCollegeName;

    const oldStudentIds = oldStudents.map((student) => String(student._id));
    const newStudentIds = newStudents.map((student) => {
      if (!student._id) student._id = new mongoose.Types.ObjectId();
      return String(student._id);
    });

    if (oldCollegeName && oldCollegeName !== newCollegeName) {
      await College.updateOne(
        { name: oldCollegeName },
        {
          $inc: { totalPoints: -existingWinner.groupPoints },
          $pull: { studentsId: { $in: oldStudentIds } },
        }
      );
    }

    if (newCollegeName) {
      await College.updateOne(
        { name: newCollegeName },
        {
          $inc: { totalPoints: groupPoints },
          $push: { studentsId: { $each: newStudentIds } },
        }
      );
    }

    const collegePointsAdjustments = {};
    const collegeStudentUpdates = {};

    oldStudents.forEach((oldStudent) => {
      const newStudent = newStudents.find(
        (s) => String(s._id) === String(oldStudent._id)
      );

      if (newStudent) {
        const pointChange = newStudent.points - oldStudent.points;
        collegePointsAdjustments[oldStudent.collegeName] =
          (collegePointsAdjustments[oldStudent.collegeName] || 0) + pointChange;

        if (oldStudent.collegeName !== newStudent.collegeName) {
          collegeStudentUpdates[oldStudent.collegeName] = collegeStudentUpdates[
            oldStudent.collegeName
          ] || { add: [], remove: [] };
          collegeStudentUpdates[oldStudent.collegeName].remove.push(
            oldStudent._id
          );

          collegeStudentUpdates[newStudent.collegeName] = collegeStudentUpdates[
            newStudent.collegeName
          ] || { add: [], remove: [] };
          collegeStudentUpdates[newStudent.collegeName].add.push(
            newStudent._id
          );
        }
      } else {
        collegePointsAdjustments[oldStudent.collegeName] =
          (collegePointsAdjustments[oldStudent.collegeName] || 0) -
          oldStudent.points;
        collegeStudentUpdates[oldStudent.collegeName] = collegeStudentUpdates[
          oldStudent.collegeName
        ] || { add: [], remove: [] };
        collegeStudentUpdates[oldStudent.collegeName].remove.push(
          oldStudent._id
        );
      }
    });

    newStudents.forEach((newStudent) => {
      const isNew = !oldStudents.some(
        (oldStudent) => String(oldStudent._id) === String(newStudent._id)
      );
      if (isNew) {
        collegePointsAdjustments[newStudent.collegeName] =
          (collegePointsAdjustments[newStudent.collegeName] || 0) +
          newStudent.points;
        collegeStudentUpdates[newStudent.collegeName] = collegeStudentUpdates[
          newStudent.collegeName
        ] || { add: [], remove: [] };
        collegeStudentUpdates[newStudent.collegeName].add.push(newStudent._id);
      }
    });

    const oldColleges = new Set(
      oldStudents.map((student) => student.collegeName)
    );
    const newColleges = new Set(
      newStudents.map((student) => student.collegeName)
    );

    oldColleges.forEach((collegeName) => {
      if (collegeName && !newColleges.has(collegeName)) {
        collegePointsAdjustments[collegeName] =
          (collegePointsAdjustments[collegeName] || 0) -
          existingWinner.groupPoints;
      }
    });

    if (groupPoints > 0) {
      newColleges.forEach((collegeName) => {
        if (collegeName) {
          collegePointsAdjustments[collegeName] =
            (collegePointsAdjustments[collegeName] || 0) + groupPoints;
        }
      });
    }

    const collegeUpdateOps = Object.entries(collegePointsAdjustments).map(
      ([collegeName, pointChange]) => ({
        updateOne: {
          filter: { name: collegeName },
          update: { $inc: { totalPoints: pointChange } },
        },
      })
    );
    if (collegeUpdateOps.length > 0) await College.bulkWrite(collegeUpdateOps);

    const studentUpdateOps = [];
    for (const [collegeName, { add, remove }] of Object.entries(
      collegeStudentUpdates
    )) {
      if (remove.length > 0) {
        studentUpdateOps.push({
          updateOne: {
            filter: { name: collegeName },
            update: { $pull: { studentsId: { $in: remove } } },
          },
        });
      }
      if (add.length > 0) {
        studentUpdateOps.push({
          updateOne: {
            filter: { name: collegeName },
            update: { $push: { studentsId: { $each: add } } },
          },
        });
      }
    }
    if (studentUpdateOps.length > 0) await College.bulkWrite(studentUpdateOps);

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
      message: "Some error occurred",
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
