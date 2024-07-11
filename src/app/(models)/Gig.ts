import mongoose from "mongoose";
import Member from "./Member";
import Client from "./Client";
import Inventory from "./Inventory";

const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_GIGDB_URI!);
mongoose.Promise = global.Promise;

const gigSchema = new Schema(
    {
        title: String,
        location: String,
        time: Date,
        date: Date,
        members: [Member],
        memberStatus: Boolean,
        client: [Client],
        inventory: [Inventory],
    },
    {
        timestamps: { createdAt: "createdDate", updatedAt: "updateDate" },
    }
);

const Gig = mongoose.models.Gig || mongoose.model("Gig", gigSchema);

export default Gig;
