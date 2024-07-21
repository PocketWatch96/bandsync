import { ObjectId } from "mongodb";
import mongoose, { Model } from "mongoose";
import connectionPromise from "./InventoryDb";

const { Schema } = mongoose;

export const inventorySchema = new Schema(
    {
        item: String,
        description: String,
        type: String,
        assigned_status: String,
    },
    {
        timestamps: { createdAt: "createdDate", updatedAt: "updateDate" },
    }
);

let Inventory: Model<InventoryType>;

try {
    const connection = connectionPromise;
    Inventory =
        connection.models.Inventory ||
        connection.model<InventoryType>("Inventory", inventorySchema);
} catch (err) {
    console.error("Error creating Inventory model:", err);
}

export interface InventoryType {
    _id: ObjectId;
    item: string;
    description: string;
    assigned_status: string;
}

export default Inventory!;