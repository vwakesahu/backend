import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("MongoDB Connected DbHost: ", connection.host);
  } catch (error) {
    console.log("MongoDB Connected Failed: ", error);
    process.exit(1);
  }
};
export default connectDb;
