const { findByIdAndUpdate } = require("../../models/colleges.model");
const Event = require("../../models/events.model");
const Winner = require("../../models/winner");
const addEvents = async (req, res) => {
  try {
    const events = req.body;
    const existingEvents = await Event.find({
      eventName: { $in: events.map((event) => event.eventName) },
    });

    if (existingEvents.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Some events already exist",
      });
    }

    const addAllEvents = await Event.insertMany(events);
    res.status(201).json({
      success: true,
      message: "Events Add SuccessFully",
      data: addAllEvents,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error Adding Events ",
    });
  }
};

const getEvents = async (req, res) => {
  try {
    const getAllEvents = await Event.find({});
    res.status(200).json({
      success: true,
      message: "Events Fetched SuccessFully",
      data: getAllEvents,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in fetching Events ",
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEventData = req.body;
    const findAndupdateEvent = await Event.findByIdAndUpdate(
      id,
      updatedEventData,
      {
        new: true,
      }
    );
    if (!findAndupdateEvent) {
      res.status(404).json({
        success: false,
        message: "Evnet Not Found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Events Updated SuccessFully",
      data: findAndupdateEvent,
    });
  } catch (err) {
    console.error("Error in updating event:", err);
    res.status(500).json({
      success: false,
      message: "Error in updating Events",
      error: err.message,
    });
  }
};

const getEventDetailsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    // Step 1: Retrieve all events for the given category
    const events = await Event.find({ category });

    if (events.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No events found for the specified category",
      });
    }

    console.log(`Total events found for category "${category}":`, events.length);

    let categoryPointsMap = new Map(); // Track total points for students in the category
    const eventDetails = [];

    // Step 2: Process each event in the category
    for (const event of events) {
      console.log(`Processing event: ${event.name}`);

      const winners = await Winner.find({ eventName: event.name });

      if (!winners || winners.length === 0) {
        console.warn(`No winners found for event: ${event.name}`);
        eventDetails.push({
          eventName: event.name,
          students: [],
          topThreeStudents: [],
        });
        continue; // Skip to the next event
      }

      console.log(`Total winners found for event "${event.name}":`, winners.length);

      const studentPointsMap = new Map(); // Track points for each student in this event

      // Step 3: Calculate points for each student
      winners.forEach((winner) => {
        const prizes = [winner.firstPrize || [], winner.secondPrize || [], winner.thirdPrize || []];

        prizes.forEach((prize, index) => {
          if (Array.isArray(prize) && prize.length > 0) {
            prize.forEach((student) => {
              if (!student || !student.studentName) return; // Skip invalid student entries

              const studentName = student.studentName.trim();
              const points = student.points || 0;

              // Ensure event-wise student points are tracked
              studentPointsMap.set(studentName, (studentPointsMap.get(studentName) || 0) + points);

              // Ensure category-wide student points are tracked
              categoryPointsMap.set(studentName, (categoryPointsMap.get(studentName) || 0) + points);
            });
          }
        });
      });

      if (studentPointsMap.size === 0) {
        console.warn(`No valid students found for event: ${event.name}`);
      }

      // Convert event student points map to an array and sort in descending order
      const studentsWithPoints = Array.from(studentPointsMap, ([studentName, points]) => ({
        studentName,
        points,
      })).sort((a, b) => b.points - a.points);

      // Get top three students for this event
      const topThreeStudents = studentsWithPoints.slice(0, 3);

      eventDetails.push({
        eventName: event.name,
        students: studentsWithPoints,
        topThreeStudents: topThreeStudents.length > 0 ? topThreeStudents : [],
      });
    }

    // Step 4: Find the overall top three students in the category
    const categoryTopThree = Array.from(categoryPointsMap, ([studentName, points]) => ({
      studentName,
      points,
    }))
      .sort((a, b) => b.points - a.points)
      .slice(0, 3); // Take the top three students

    console.log(`Category Top 3 Students for "${category}":`, categoryTopThree);

    res.status(200).json({
      success: true,
      message: "Event details fetched successfully",
      data: {
        events: eventDetails,
        categoryTopThree: categoryTopThree.length > 0 ? categoryTopThree : [],
      },
    });
  } catch (err) {
    console.error("Error in fetching event details:", err);
    res.status(500).json({
      success: false,
      message: "Error in fetching event details",
      error: err.message,
    });
  }
};




module.exports = {
  addEvents,
  getEvents,
  updateEvent,
  getEventDetailsByCategory,
};
