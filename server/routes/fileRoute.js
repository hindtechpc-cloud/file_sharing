import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/upload.js";
import { getFiles, uploadFile } from "../controller/fileController.js";
const router = express.Router();

router.post("/upload-file", protect, upload.single("file"), uploadFile);
router.get("/",protect,getFiles);

export const fileRouter=router;
