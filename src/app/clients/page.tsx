import { faUsersLine, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ClientCard from "../(components)/clients/ClientCard";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const Clients = () => {
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
                    <div className="lg:grid grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
