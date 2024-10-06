import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const URI = process.env.MongoDBURI || 'mongodb+srv://pradipbhatt:pradip@cluster0.zi62tma.mongodb.net/team-CELESTIALS?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(URI, {
            useNewUrlParser: true,  // Use the new URL parser for MongoDB
            useUnifiedTopology: true,  // Use the new server discovery and monitoring engine
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error: ", error);
        process.exit(1);  // Exit the process with failure
    }
}

export default connectDB;
