const express = require("express");
const router = express.Router();

const {
  addAnnouncementText,
  deleteAnnouncementText,
  getAllAnnouncement,
} = require("../../controllers/announcement-controllers/index");

router.post("/add-announcement", addAnnouncementText);

router.delete("/delete-announcement/:id", deleteAnnouncementText);
router.get("/get-announcement", getAllAnnouncement);

module.exports = router;
