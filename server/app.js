import express from "express";
import { authRouter } from "./routes/authRoute.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.get("/health", (req, res) => {
  return res.json({
    message: "OK",
  });
});

app.use("/api/auth",authRouter);
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
