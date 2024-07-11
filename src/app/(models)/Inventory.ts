import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_INVENTORYDB_URI!);
mongoose.Promise = global.Promise;

const inventorySchema = new Schema(
    {
        name: String,
        type: String,
        assigned_status: String,
    },
    {
        timestamps: { createdAt: "createdDate", updatedAt: "updateDate" },
    }
);

const Inventory =
    mongoose.models.Inventory || mongoose.model("Inventory", inventorySchema);

export default Inventory;
