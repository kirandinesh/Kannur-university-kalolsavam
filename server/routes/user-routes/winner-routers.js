const express = require("express");
const route = express.Router();

const { getAllWinner } = require("../../controllers/winner-controller/index");

route.get("/get-winner", getAllWinner);

module.exports = route;
