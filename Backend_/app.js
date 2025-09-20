import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

// Routes
import user from "./routes/user.js";
import lawyer from "./routes/lawyer.js";
import authentication from "./routes/authentication.js";
import payment from "./routes/payment.js";
import Rating from "./routes/rating.js";
import chatRoutes from "./routes/chat.js";
import messageRoutes from "./routes/message.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

// ==================== CORS ====================
app.use(
  cors({
    origin: "*", // ⚠️ In production, replace with your frontend URL (e.g., "http://13.60.230.203")
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ==================== Middleware ====================
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ==================== Routes ====================
app.use("/user", user);
app.use("/lawyer", lawyer);
app.use("/payments", payment);
app.use("/auth", authentication);
app.use("/rating", Rating);
app.use("/chat", chatRoutes);
app.use("/messages", messageRoutes);

// ==================== Error Handler ====================
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

// ==================== DB Connection ====================
const connect = async () => {
  try {
    await mongoose.connect(process.env.db2);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
  }
};

// ==================== Socket.IO ====================
const io = new Server(server, {
  cors: {
    origin: "*", // ⚠️ replace with frontend domain in production
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`🔌 Socket connected: ${socket.id}`);

  // Join chat room
  socket.on("join_chat", ({ chatId, userId, userType }) => {
    socket.join(chatId);
    socket.data = { userId, userType };
    console.log(`${userType} ${userId} joined chat ${chatId}`);
  });

  // Send and broadcast message
  socket.on("send_message", ({ chatId, message }) => {
    socket.to(chatId).emit("receive_message", message);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log(`🔌 Socket disconnected: ${socket.id}`);
  });
});

// ==================== Start Server ====================
const port = process.env.PORT || 3000;

server.listen(port, () => {
  connect();
  console.log(`🚀 Server is running with Socket.IO at http://localhost:${port}`);
});
