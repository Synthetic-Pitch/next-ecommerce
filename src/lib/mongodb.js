// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Track the connection status
let isConnected = false;

const ConnectionDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("MongoDB URI is not defined!");
    }

    // If already connected, reuse the connection
    if (isConnected) {
      console.log("Using existing MongoDB connection");
      return;
    }
    
    // Connect to MongoDB without deprecated options
    await mongoose.connect(MONGODB_URI);
    
    isConnected = true;
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

// Handle connection errors after initial connection
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  isConnected = false;
});

export default ConnectionDB;