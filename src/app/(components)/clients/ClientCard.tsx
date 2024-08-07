import Link from "next/link";
import ClientDelete from "./ClientDelete";
import { ClientType } from "@/app/(models)/Client";

interface PageProps {
    client: ClientType;
}

const ClientCard = ({ client }: PageProps) => {
    return (
        <div className="card flex flex-col bg-base-300 shadow-lg p-4 m-2 hover:bg-base-200">
            <div className="flex mb-3">
                <div className="text-lg">
                    {client.fname} {client.lname}
                </div>
                <div className="ml-auto">
                    <ClientDelete clientId={client._id.toString()} />
                </div>
            </div>
            <Link
                href={`/clients/${client._id}`}
                style={{ display: "contents" }}
            >
                <hr className="h-px border-0 bg-primary mb-2" />
                <div className="flex-grow"></div>
                <div className="flex mt-2">
                    <div className="p-2 w-full">
                        <div className="flex flex-row items-center w-full">
                            <div className="flex justify-start">
                                <strong>E-mail: </strong>
                            </div>
                            <div className="flex ml-auto justify-end">
                                {client.email}
                            </div>
                        </div>
                        <div className="flex flex-row items-center w-full">
                            <div className="flex justify-start">
                                <strong>Phone Number: </strong>
                            </div>
                            <p className="flex ml-auto justify-end">
                                {client.phone}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ClientCard;
