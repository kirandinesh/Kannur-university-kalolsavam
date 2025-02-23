const express = require("express");
const route = express.Router();

const {
  searchEvents,
  searchCollege,
  searchWinnerListItem,
} = require("../../controllers/search-controllers/index");

route.get("/:keyword", searchEvents);
route.get("/college/:keyword", searchCollege);
route.get("/winners/:keyword", searchWinnerListItem);

module.exports = route;
