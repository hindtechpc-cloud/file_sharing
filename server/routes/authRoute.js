import express from "express";
import { login, register } from "../controller/authControlle.js";

const router = express.Router();

// router.get("/auth-route", (req, res) => {
//   console.log("auth route");
// });

router.post("/register",register);
router.post("/login",login);
export const authRouter=router;
