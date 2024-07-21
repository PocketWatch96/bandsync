import Client from "@/app/(models)/Client";
import { NextResponse } from "next/server";

type Params = {
    clientId: string;
};

export const GET = async (req: Request, context: { params: Params }) => {
    try {
        const clientId = context.params.clientId;
        console.log("Client ID: " + clientId)
        const client = await Client.findById(clientId);

        if (!client) {
            return NextResponse.json(
                { error: "Client not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(client, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Error fetching client" },
            { status: 500 }
        );
    }
};


export const DELETE = async (req: Request, context: { params: Params }) => {
    try {
        const clientId = context.params.clientId;
        console.log("Client ID: " + clientId)
        await Client.findByIdAndDelete(clientId);

        return NextResponse.json(
            { error: "Client deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Error deleting client" },
            { status: 500 }
        );
    }
};

export const PUT = async (req: Request, context: { params: Params }) => {
    try {
        const clientId = context.params.clientId;
        const body = await req.json();
        const updatedClientData = body;

        const updatedClient = await Client.findByIdAndUpdate(clientId, updatedClientData, { new: true });

        if (!updatedClient) {
            return NextResponse.json(
                { error: "Client not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedClient, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Error updating client" },
            { status: 500 }
        );
    }
};

