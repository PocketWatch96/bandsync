import Client from "../../(models)/Client";
import { NextResponse } from "next/server";

// export const POST = async (req: Request) => {
//     try {
//         if (!req.body) {
//             console.log("No body in request");
//             return NextResponse.json({ error: "No body" }, { status: 400 });
//         }

//         const body = await req.json();
//         const clientData = body;
//         console.log(clientData)
//         await Client.create(clientData);
//         return NextResponse.json(
//             { message: "Client created" },
//             { status: 201 }
//         );
//     } catch (error) {
//         console.log("Client Creation Error:", error);
//         return NextResponse.json(
//             { error: "Error creating client" },
//             { status: 500 }
//         );
//     }
// };

export async function POST(request: Request) {
    const { fname, lname, email, phone, cUserId, cOrgId } =
        await request.json();

    try {
        const newClient = new Client({
            fname,
            lname,
            email,
            phone,
            cUserId, // Include userId
            cOrgId, // Include orgId
        });
        console.log("userId: ", cUserId);

        await newClient.save();
        console.log("After: ");
        console.log(newClient);

        return NextResponse.json(
            { client: newClient, message: "Client created" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Error creating client" },
            { status: 500 }
        );
    }
}

export const GET = async (req: Request) => {
    const {searchParams} = new URL(req.url)
    const cOrgId = searchParams.get("cOrgId")

    if (!cOrgId) {
        return NextResponse.json(
            {error: "No organization ID"},
            {status: 400}
        )
    }

    try {
        const clients = await Client.find({cOrgId});

        return NextResponse.json({ clients }, { status: 200 });
    } catch (error) {
        console.log("Client Retreival Error:", error);
        return NextResponse.json(
            { error: "Error revreiving client" },
            { status: 500 }
        );
    }
};
