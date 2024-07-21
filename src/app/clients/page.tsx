"use client";

import { faUsersLine, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ClientCard from "../(components)/clients/ClientCard";
import { useEffect, useState } from "react";
import { ClientType } from "../(models)/Client";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await fetch("/api/Clients");
                const data = await res.json();
                
                setClients(
                    data.clients.sort(
                        (a: { fname: string }, b: { fname: string }) =>
                            a.fname.localeCompare(b.fname)
                    )
                );
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        };

        fetchClients();
    }, []);

    return (
        <div>
            <div className="min-w-full flex justify-start align-baseline">
                <div className="content-center p-4">
                    <FontAwesomeIcon icon={faUsersLine} className="icon" />
                </div>
                <div className="content-center py-4">
                    <h1 className="text-base-content text-2xl">
                        Clients Dashboard
                    </h1>
                </div>
            </div>
            <div className="flex-row">
                <div className="content-center p-4">
                    <Link href="/clients/new" className="btn btn-primary p-4">
                        <FontAwesomeIcon icon={faUserPlus} className="icon" />
                        Add a Client
                    </Link>
                </div>
                <div className="p-4">
                    <div className="lg:grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
                        {clients.map((client: ClientType) => (
                            <ClientCard
                                key={client._id.toString()}
                                client={client}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
