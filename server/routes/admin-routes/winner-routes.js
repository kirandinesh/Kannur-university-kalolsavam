const express = require("express");
const route = express.Router();

const {
  addWinner,
  getAllWinner,
  updateWinner,
  getWinnerDetailsById,
} = require("../../controllers/winner-controller/index");

route.post("/add-winner", addWinner);
route.get("/get-winner", getAllWinner);
route.put("/update-winner/:id", updateWinner);
route.get("/get-winner/details/:id", getWinnerDetailsById);

module.exports = route;
