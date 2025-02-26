const express = require("express");
const {
  getAllOnstageCollege,
} = require("../../controllers/onStage-controllers/index");

const router = express.Router();

router.get("/get-onstage", getAllOnstageCollege);

module.exports = router;
