import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = `${process.env.MONGO_FULL_URL}`;
export const client = new MongoClient(uri);

export function connectDB() {
    client.connect().then(() => {
        console.log("Connected to MongoDB");
    })
}

export function disconnectDB() {
    client.close().then(() => {
        console.log("Disconnected from MongoDB");
    })
}