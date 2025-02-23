const express = require("express");
const route = express.Router();

const {
  addCollege,
  getAllCollege,
  addTotalPointValue,
  reduceTotalPointValue,
} = require("../../controllers/college-controllers/index");

route.post("/add-college", addCollege);
route.get("/get-colleges", getAllCollege);
route.put("/add-point", addTotalPointValue);
route.put("/reduce-point", reduceTotalPointValue);

module.exports = route;
