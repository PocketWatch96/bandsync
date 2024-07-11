import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_MEMBERDB_URI!);
mongoose.Promise = global.Promise;

const memberSchema = new Schema(
    {
        fname: String,
        lname: String,
        type: String,
        instruments: [String],
    },
    {
        timestamps: { createdAt: "createdDate", updatedAt: "updateDate" },
    }
);

const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);

export default Member;
