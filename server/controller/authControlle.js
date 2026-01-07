import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcryptjs";
const generateToken = async (id) => {
  let token;
  try {
    token = jwt.sign({ id }, process.env.SECRET_KEY);
  } catch (error) {
    console.log(error.message);
    return null;
  }
  if (!token || token == null) {
    console.log("Token not generated");
    return null;
  }
  return token;
};
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  let user;
  try {
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return res.status(500).json({
      message: "serever error",
      error: error.message,
    });
  }
  if (!user || user == null) {
    return res.status(400).json({
      message: "user not regisetred",
    });
  }
  const token = await generateToken(user._id);
  if (!token || token == null) {
    return res.status(400).json({
      message: "token not generated",
    });
  }
  user.password = "";
  return res.status(201).json({
    message: "user regisetred successfully",
    user,
    token,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.find({ email: email }).select("-password");
  } catch (error) {
    return res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
  if (!user || user == null) {
    return res.status(404).json({
      message: "Your email is wrong",
    });
  }
  const passwordMatche = bcrypt.compare(password, user.password);
  if (!passwordMatche) {
    return res.status(404).json({
      message: "Your password is wrong",
    });
  }
  const token = await generateToken(user._id);
  if (!token || token == null) {
    return res.status(400).json({
      message: "token not generated",
    });
  }

  return res.status(201).json({
    message: "user loggedin successfully",
    user,
    token,
  });
};
