import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import { createProduct } from "./controllers/product.controller.js";

dotenv.config();
const app = express();

app.use(express.json());

app.post("/products", createProduct);

app.listen(process.env.PORT || 5000, () => {
  connectDB();
  console.log(`Server running on port ${process.env.PORT}`);
});
