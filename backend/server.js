import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoBD from "./db/connectDB.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongoBD();
});
