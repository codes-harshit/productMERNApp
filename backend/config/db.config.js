import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.log(`Unable to connect to the database: ${error}`);
  }
};
