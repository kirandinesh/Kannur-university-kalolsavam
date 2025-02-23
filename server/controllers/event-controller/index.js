const { findByIdAndUpdate } = require("../../models/colleges.model");
const Event = require("../../models/events.model");

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

module.exports = { addEvents, getEvents, updateEvent };
