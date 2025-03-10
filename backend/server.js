import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.config.js";
import productRouter from "./routes/product.routes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productRouter);

app.listen(process.env.PORT || 5000, () => {
  connectDB();
  console.log(`Server running on port ${process.env.PORT}`);
});
