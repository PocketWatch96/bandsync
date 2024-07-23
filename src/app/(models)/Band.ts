import { ObjectId } from "mongodb";
import mongoose, { Model } from "mongoose";
import connectionPromise from "./BandDb";

const { Schema } = mongoose;

const bandSchema = new Schema(
    {
        bandName: String,
        adminId: String,
        bOrgId: String,
    },
    {
        timestamps: { createdAt: "createdDate", updatedAt: "updateDate" },
    }
);

let Band: Model<BandType>;

try {
    const connection = connectionPromise;
    Band = connection.models.Band || connection.model("Band", bandSchema);
} catch (err) {
    console.log("Error creating band model: ", err);
}

export interface BandType {
    _id: ObjectId;
    bandName: string;
    adminId: string;
    bOrgId: string;
    createdDate?: Date;
    updateDate?: Date;
}

export default Band!;
