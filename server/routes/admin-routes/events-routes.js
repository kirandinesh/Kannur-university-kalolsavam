const express = require("express");
const route = express.Router();

const {
  addEvents,
  getEvents,
  updateEvent,
} = require("../../controllers/event-controller/index");

route.post("/add-events", addEvents);
route.get("/get-events", getEvents);
route.put("/update-events/:id", updateEvent);

module.exports = route;
