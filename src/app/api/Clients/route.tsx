import Client from "../../(models)/Client";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("Request Headers:", req.headers);
    console.log("Request Method:", req.method);
    try {
        if (!req.body) {
            console.log("No body in request");
            return res.status(400).json({ message: "No data provided" });
        }

        const body = await req.body;
        console.log("Request Body:", body);
        const clientData = body.formData;
        await Client.create(clientData);

        return res.status(201).json({ message: "Client created" });
    } catch (error) {
        console.log("Client Creation Error:", error);
        return res.status(500).json({message: "error creating client"});
    }
}
