const express = require("express");
const {
  addOffstageCollege,
  getAllOffstageCollege,
  deleteOffstageCollegeById,
} = require("../../controllers/offStage-controllers/index");

const router = express.Router();

router.post("/add-offstage", addOffstageCollege);
router.get("/get-offstage", getAllOffstageCollege);
router.delete("/delete-offstage/:id", deleteOffstageCollegeById);

module.exports = router;
