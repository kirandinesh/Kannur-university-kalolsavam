const express = require("express");
const {
  addOnstageCollege,
  getAllOnstageCollege,
  deleteOnstageCollegeById,
} = require("../../controllers/onStage-controllers/index");

const router = express.Router();

router.post("/add-onstage", addOnstageCollege);
router.get("/get-onstage", getAllOnstageCollege);
router.delete("/delete-onstage/:id", deleteOnstageCollegeById);

module.exports = router;
