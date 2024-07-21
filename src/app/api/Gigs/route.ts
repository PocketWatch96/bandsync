import Gig from "@/app/(models)/Gig";
import { NextRequest, NextResponse } from "next/server";

const POST = async ({ req }: { req: NextRequest }) => {
    try {
        const body = await req.json();
        const gigData = body.formData;
        await Gig.create(gigData);

        return NextResponse.json({ message: "Gig created" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
};
