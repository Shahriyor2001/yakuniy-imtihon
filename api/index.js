import dotenv from "dotenv";
import { setupSwagger } from './swagger.js';
import cors from 'cors';
import express from "express";


import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import postRoutes from "./routes/post.route.js";
import categoryRoutes from "./routes/category.route.js";

import tagRoutes from "./routes/tag.route.js";
import termRoutes from "./routes/term.route.js";
import cookieParser from "cookie-parser";
import connectDB from "./db/connect.js";

dotenv.config();
const PORT = process.env.PORT || 3001;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/post", postRoutes);
app.use("/api/category", categoryRoutes);

app.use("/api/term", termRoutes);
app.use("/api/tag", tagRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

setupSwagger(app); 

app.listen(PORT, () => {

  console.log(`Server is running on port: ${PORT}`);
});
