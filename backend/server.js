import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoBD from "./db/connectDB.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //to get body data
app.use(express.urlencoded({ extended: true })); //to parse form data
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongoBD();
});
