import authRoutes from "./routes/auth.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Configurations
dotenv.config({ path: path.resolve(__dirname, "./utils/lib/.env") });
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.use("/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Connect Backend API - v1.0");
});


const PORT = process.env.PORT || 5000;

// loading environment variables
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL || "mongodb://0.0.0.0:27017/connect-cek", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("Database connected successfully 🚀");
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });

export default app;
