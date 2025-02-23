const express = require("express");
const router = express.Router();

const {
  getAllAchievement,
} = require("../../controllers/achievement-controllers/index");

router.get("/get-achievements", getAllAchievement);

module.exports = router;
