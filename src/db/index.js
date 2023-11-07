import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("Connection Instance: ", connectionInstance.connection.host);
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};
export default connectDb;
