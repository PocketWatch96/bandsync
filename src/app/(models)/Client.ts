import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_CLIENTDB_URI!);
mongoose.Promise = global.Promise;

const clientSchema = new Schema(
    {
        fname: String,
        lname: String,
        email: String,
        phone: String,
    },
    {
        timestamps: { createdAt: "createdDate", updatedAt: "updateDate" },
    }
);

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

export default Client;
