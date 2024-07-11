import ClientForm from "../../(components)/clients/ClientForm";

const getClientById = async ({ id }: { id: string }) => {};

const Client = async ({ params }: { params: { clientId: string } }) => {
    const EDITMODE = params.clientId === "new" ? false : true;

    if (EDITMODE) {
    }

    return (
        <div className="p-4">
            <ClientForm />
        </div>
    );
};

export default Client;
