import express from "express";
import { login, register } from "../controller/authControlle.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// router.get("/auth-route", (req, res) => {
//   console.log("auth route");
// });

router.post("/register", register);
router.post("/login", login);
// router.get("/check", protect, (req, res) => {
//   return res.json({
//     message: "ok",
//     id:req.decoded
//   });
// });

export const authRouter = router;
