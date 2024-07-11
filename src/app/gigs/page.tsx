import { faCalendarDays, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import GigCard from "../(components)/gigs/GigCard";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const Gigs = () => {
    return (
        <div>
            <div className="min-w-full flex justify-start align-baseline">
                <div className="content-center p-4">
                    <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                </div>
                <div className="content-center py-4">
                    <h1 className="text-base-content text-1xl">
                        Gigs Dashboard
                    </h1>
                </div>
            </div>
            <div className="flex-row">
                <div className="content-center p-4">
                    <Link href="" className="btn btn-primary p-4">
                        <FontAwesomeIcon icon={faPlus} className="icon" />
                        Add a Gig
                    </Link>
                </div>
                <div className="p-4">
                    <GigCard />
                    <GigCard />
                    <GigCard />
                    <GigCard />
                    <GigCard />
                </div>
            </div>
        </div>
    );
};

export default Gigs;
