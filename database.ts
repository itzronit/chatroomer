import mongoose from "mongoose";

const uri = `${process.env.MONGO_FULL_URL}/${process.env.MONGO_DATABASE_NAME}`;

export function connectDB() {

    /* 
    Mongoose readyState meanings:

    0: disconnected
    1: connected
    2: connecting
    3: disconnecting

    */

    if (mongoose.connection.readyState === 0) {
        mongoose.connect(uri).then(() => {
            console.log("Connected to MongoDB(Mongoose Wrapper)");
        });
    }
}

export function disconnectDB() {
    mongoose.disconnect().then(() => {
        console.log("Disconnected from MongoDB(Mongoose Wrapper)");
    });
}