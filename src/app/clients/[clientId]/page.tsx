import ClientForm from "../../(components)/clients/ClientForm";

const getClientById = async (clientId: string) => {
    try {
        const res = await fetch(
            `http://localhost:3000/api/Clients/${clientId}`
        );

        if (!res.ok) {
            throw new Error("Failed to fetch client");
        }

        const client = await res.json();
        return client;
    } catch (error) {
        console.error("Error fetching client:", error);
        return null;
    }
};

const ClientAandE = async ({ params }: { params: { clientId: string } }) => {
    const EDITMODE = params.clientId === "new" ? false : true;
    let updateClientData = {};

    if (EDITMODE) {
        updateClientData = await getClientById(params.clientId);
    } else {
        updateClientData = {
            _id: "new",
        };
    }

    return (
        <div className="p-4">
            <ClientForm client={updateClientData} />
        </div>
    );
};

export default ClientAandE;
