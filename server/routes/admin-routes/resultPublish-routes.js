const express = require("express");
const route = express.Router();

const {
  addResult,
  getResult,
} = require("../../controllers/result-publish-controller/index");

route.post("/add-result", addResult);
route.get("/get-result", getResult);

module.exports = route;
