import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI="mongodb+srv://shahriyoribnmurod:6Ca0JfQiBCzQBtx8@cluster0.skryr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
async function connectDB() {
  try {
    await mongoose
      .connect(MONGO_URI)
      .then(() => console.log("Connected"))
      .catch((err) => console.log(err));
  } catch (err) {
    throw console.log(err.message);
  }
}

export default connectDB;
