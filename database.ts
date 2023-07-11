import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const uri = `${process.env.MONGO_FULL_URL}/${process.env.MONGO_DATABASE_NAME}`;

export function connectDB() {
    mongoose.connect(uri).then(() => {
        console.log("Connected to MongoDB(Mongoose Wrapper)");
    });
}

export function disconnectDB() {
    mongoose.disconnect().then(() => {
        console.log("Disconnected from MongoDB(Mongoose Wrapper)");
    });
}