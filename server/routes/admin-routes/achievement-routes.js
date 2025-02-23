const express = require("express");
const route = express.Router();

const {
  getAllAchievement,
  updateAchievementById,
  deleteAchievementById,
  addNewAchievement,
} = require("../../controllers/achievement-controllers/index");

route.post("/add-achievement", addNewAchievement);
route.get("/get-achievements", getAllAchievement);
route.put("/update-achievement/:id", updateAchievementById);
route.delete("/delete-achievements/:id", deleteAchievementById);

module.exports = route;
