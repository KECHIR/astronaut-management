import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
  try {
    const connectionString: string = process.env
      .MONGO_DB_CONNECTION_STRING as string;
    await mongoose.connect(connectionString);
    console.log("MongoDB database successfully connected!");
  } catch (e) {
    throw new Error(`Error occured while connecting to MongoDB: Error=${JSON.stringify(e)}` );
  }
}
