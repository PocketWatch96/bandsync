import mongoose from "mongoose";

const connectionString = process.env.MONGO_BANDDB_URI!;

const connection = mongoose.createConnection(connectionString, {});

connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});

export default connection;
