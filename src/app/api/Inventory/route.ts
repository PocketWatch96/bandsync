import Inventory, { InventoryType } from "@/app/(models)/Inventory";
import { NextResponse } from "next/server";
// const connect = require("@/app/(models)/Inventory");

export const POST = async (req: Request) => {
    try {
        // let conn = await connect();

        if (!req.body) {
            console.log("No body in inventory request");
            return NextResponse.json({ error: "No body" }, { status: 400 });
        }

        const body: InventoryType = await req.json();
        const inventoryData = body;
        await Inventory.create(inventoryData);
        return NextResponse.json(
            { message: "Inventory added" },
            { status: 201 }
        );
    } catch (error) {
        console.log("Inventory creation error", error);
        return NextResponse.json(
            { message: "Error creating inventory" },
            { status: 500 }
        );
    }
};

export const GET = async () => {
    try {
        const inventory = await Inventory.find();

        return NextResponse.json({ inventory }, { status: 200 });
    } catch (error) {
        console.log("Inventory retreival error", error);
        return NextResponse.json(
            { error: "Error retreiving inventory" },
            { status: 500 }
        );
    }
};
