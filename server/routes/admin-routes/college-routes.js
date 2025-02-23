const express = require("express");
const route = express.Router();

const {
  addCollege,
  getAllCollege,
} = require("../../controllers/college-controllers/index");

route.post("/add-college", addCollege);
route.get("/get-colleges", getAllCollege);

module.exports = route;
