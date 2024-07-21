import { faUsersLine, faUserPlus } from "@fortawesome/free-solid-svg-icons";
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
import Link from "next/link";

export const BandPage = () => {
    return (
        <div>
            <div className="min-w-full flex justify-start align-baseline">
                <div className="content-center p-4">
                    <FontAwesomeIcon icon={faUsersLine} className="icon" />
                </div>
                <div className="content-center py-4">
                    <h1 className="text-base-content text-2xl">
                        Bands Dashboard
                    </h1>
                </div>
            </div>
            <div className="flex-row">
                <div className="content-center p-4">
                    <Link href="/clients/new" className="btn btn-primary p-4">
                        <FontAwesomeIcon icon={faUserPlus} className="icon" />
                        Create a band
                    </Link>
                </div>
                <div className="p-4">
                    <div className="lg:grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
                        <div>Bands go here</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
