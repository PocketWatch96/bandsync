import { ObjectId } from "mongodb";
import mongoose, { Model } from "mongoose";
import connectionPromise from "./ClientDb";

const { Schema } = mongoose;

const clientSchema = new Schema(
    {
        fname: String,
        lname: String,
        email: String,
        phone: String,
        cUserId: String,
        cOrdId: String,
    },
    {
        timestamps: { createdAt: "createdDate", updatedAt: "updateDate" },
    }
);

let Client: Model<ClientType>;

try {
    const connection = connectionPromise;
    Client =
        connection.models.Client || connection.model("Client", clientSchema);
} catch (err) {
    console.log("Error creating client model: ", err);
}

export interface ClientType {
    _id: ObjectId;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    cUserId: String;
    cOrdId: String;
    createdDate?: Date;
    updateDate?: Date;
}

export default Client!;
