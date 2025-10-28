import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";
import cateringRoutes from "./routes/cateringRoutes.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// your MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// use booking routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/catering", cateringRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
