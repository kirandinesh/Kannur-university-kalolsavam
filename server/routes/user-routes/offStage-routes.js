const express = require("express");
const {
  getAllOffstageCollege,
} = require("../../controllers/offStage-controllers/index");

const router = express.Router();

router.get("/get-offstage", getAllOffstageCollege);

module.exports = router;
