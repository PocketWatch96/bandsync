import Inventory from "@/app/(models)/Inventory";
import { NextResponse } from "next/server";

type Params = {
    inventoryId: string;
};

export const GET = async (req: Request, context: { params: Params }) => {
    try {
        const inventoryId = context.params.inventoryId;
        const inventory = await Inventory.findById(inventoryId);

        if (!inventory) {
            return NextResponse.json(
                { error: "Inventory not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(inventory, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Error fetching inventory" },
            { status: 500 }
        );
    }
};

export const DELETE = async (req: Request, context: { params: Params }) => {
    try {
        const inventoryId = context.params.inventoryId;
        await Inventory.findByIdAndDelete(inventoryId);

        return NextResponse.json(
            { message: "Inventory deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Error deleting inventory" },
            { status: 500 }
        );
    }
};

export const PUT = async (req: Request, context: { params: Params }) => {
    try {
        const inventoryId = context.params.inventoryId;
        const body = await req.json();
        const updatedInventoryData = body;

        const updatedInventory = await Inventory.findByIdAndUpdate(inventoryId, updatedInventoryData, { new: true });

        if (!updatedInventory) {
            return NextResponse.json(
                { error: "Inventory not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedInventory, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Error updating inventory" },
            { status: 500 }
        );
    }
};
