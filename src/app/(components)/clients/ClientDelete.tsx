"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

interface PageProps {
    clientId: string;
}

const ClientDelete = ({ clientId }: PageProps) => {
    const router = useRouter();

    const deleteClient = async () => {
        try {
            console.log("Client ID: ", clientId)
            const res = await fetch(`/api/Clients/${clientId}`, {
                method: "DELETE",
            });

            if (res.ok) {
                console.log("Page realoading")
                window.location.reload()
            } else {
                console.error("Failed to delete client");
            }
        } catch (error) {
            console.error("Error deleting client:", error);
        }
    };

    return (
        <FontAwesomeIcon
            icon={faX}
            className="icon hover:cursor-pointer hover:text-xButtonRed"
            onClick={deleteClient}
        />
    );
};

export default ClientDelete;