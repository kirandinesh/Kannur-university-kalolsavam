const express = require("express");
const router = express.Router();

const {
  getAllAnnouncement,
} = require("../../controllers/announcement-controllers/index");

router.get("/get-announcement", getAllAnnouncement);

module.exports = router;
