const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { userName, userEmail, password, role } = req.body;
  if (!userName || !userEmail || !password || !role) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const existingUser = await User.findOne({
      $or: [{ userEmail }, { userName }],
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already Exists",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userEmail,
      userName,
      role,
      password: hashpassword,
    });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Registered Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

const loginUser = async (req, res) => {
  const { userEmail, password } = req.body;
  try {
    const checkUserExist = await User.findOne({ userEmail });
    if (!checkUserExist) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUserExist.password
    );
    if (!checkPasswordMatch)
      return res.status(400).json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const accessToken = jwt.sign(
      {
        _id: checkUserExist._id,
        userName: checkUserExist.userName,
        userEmail: checkUserExist.userEmail,
        role: checkUserExist.role,
      },
      "JWT_SECRET",
      { expiresIn: "120m" }
    );
    return res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      data: {
        accessToken,
        user: {
          _id: checkUserExist._id,
          userName: checkUserExist.userName,
          userEmail: checkUserExist.userEmail,
          role: checkUserExist.role,
        },
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred",
    });
  }
};

module.exports = { registerUser, loginUser };
