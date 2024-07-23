import Band from "@/app/(models)/Band";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const { bandName, adminId, bOrgId } = await request.json();

    console.log("Received data: ", { bandName, adminId, bOrgId }); // Log the received data

    try {
        const newBand = new Band({
            bandName,
            adminId,
            bOrgId,
        });
        console.log("-------------------------------------------------")
        console.log("Band Name: ", bandName)
        console.log("Admin ID: ", adminId);
        console.log("Org ID: ", bOrgId);
        console.log("-------------------------------------------------")

        await newBand.save();

        return NextResponse.json(
            { band: newBand, message: "Band created" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Error creating band: " },
            { status: 500 }
        );
    }
};