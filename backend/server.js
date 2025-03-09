import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";

dotenv.config();
const app = express();

app.listen(process.env.PORT || 5000, () => {
  connectDB();
  console.log(`Server running on port ${process.env.PORT}`);
});
