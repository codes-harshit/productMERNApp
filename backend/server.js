import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import {
  createProduct,
  deleteProduct,
} from "./controllers/product.controller.js";

dotenv.config();
const app = express();

app.use(express.json());

app.post("/api/v1/products", createProduct);

app.delete("/api/v1/products/:id", deleteProduct);

app.listen(process.env.PORT || 5000, () => {
  connectDB();
  console.log(`Server running on port ${process.env.PORT}`);
});
