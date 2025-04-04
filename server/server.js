require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./utils/db");
const rateLimit = require("express-rate-limit");

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100,
//   message: "Too many requests, please try again later",
// });

const authRouter = require("./routes/auth-routes/index");
const adminResultRouter = require("./routes/admin-routes/resultPublish-routes");
const adminCollegeRouter = require("./routes/admin-routes/college-routes");
const adminEventsRouter = require("./routes/admin-routes/events-routes");
const adminAchievementsRouter = require("./routes/admin-routes/achievement-routes");
const searchRouter = require("./routes/search-routes/index");
const adminWinnerRouter = require("./routes/admin-routes/winner-routes");
const userResultRouter = require("./routes/user-routes/resultPublish-routes");
const userWinnerRouter = require("./routes/user-routes/winner-routers");
const userAchievementsRouter = require("./routes/user-routes/achievement-routes");
const userAnnouncementRouter = require("./routes/user-routes/annoucement-router");
const adminAnnouncementRouter = require("./routes/admin-routes/annoucement-router");
const adminOnStageRouter = require("./routes/admin-routes/onStage-routes");
const adminOffStageRouter = require("./routes/admin-routes/offStage-routes");
const userOnStageRouter = require("./routes/user-routes/onStage-routes");
const userOffStageRouter = require("./routes/user-routes/offStage-routes");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(limiter);
app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.listen(PORT, () => {
  console.log(`Server is now Running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

app.use("/auth", authRouter);
app.use("/admin/result", adminResultRouter);
app.use("/admin/college", adminCollegeRouter);
app.use("/admin/events", adminEventsRouter);
app.use("/user/results", userResultRouter);
app.use("/search", searchRouter);
app.use("/admin/winner", adminWinnerRouter);
app.use("/user/winner", userWinnerRouter);
app.use("/admin/achievement", adminAchievementsRouter);
app.use("/user/achievement", userAchievementsRouter);
app.use("/user/announcement", userAnnouncementRouter);
app.use("/admin/announcement", adminAnnouncementRouter);

app.use("/user/onstage", userOnStageRouter);
app.use("/user/offstage", userOffStageRouter);

app.use("/admin/onstage", adminOnStageRouter);
app.use("/admin/offstage", adminOffStageRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong ",
  });
});
