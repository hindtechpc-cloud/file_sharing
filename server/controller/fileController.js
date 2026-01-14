import { File } from "../models/File.js";
import { User } from "../models/User.js";

export const uploadFile = async (req, res) => {
  const { file } = req.body;
  const userId = req.decoded;
  let user;
  try {
    user = await User.findById(userId);
  } catch (error) {
    return res.json({
      message: "server error",
      error: error.message,
    });
  }
  if (!user) {
    return res.json({
      message: "You are not autherized",
    });
  }
  let doc;
  try {
    doc = await File.create({
      file: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype,
      owner: userId,
    });
  } catch (error) {
    return res.json({
      message: "server error to create file",
      error: error.message,
    });
  }
  if (!doc) {
    return res.json({
      message: "file not created",
    });
  }
  return res.json({
    message: "file stored successfully ",
    doc,
  });
};

export const getFiles = async (req, res) => {
  let files;
  try {
    files = await File.find({owner:req.decoded});
    return res.json({
      message: "files fetched",
      files,
    });
  } catch (error) {
    console.log(error);
  }
};
