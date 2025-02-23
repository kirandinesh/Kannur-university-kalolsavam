const express = require("express");
const route = express.Router();

const {
  getResult,
} = require("../../controllers/result-publish-controller/index");

route.get("/get-result", getResult);

module.exports = route;
