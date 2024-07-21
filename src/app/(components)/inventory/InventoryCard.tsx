import Link from "next/link";
import InventoryDelete from "./InventoryDelete";
import { InventoryType } from "@/app/(models)/Inventory";

interface PageProps {
    inventory: InventoryType;
}

const InventoryCard = ({ inventory }: PageProps) => {
    return (
        <div className="card flex flex-col bg-base-300 shadow-lg p-4 m-2 hover:bg-base-200">
            <div className="flex mb-3">
                <div className="text-lg">{inventory.item}</div>
                <div className="ml-auto">
                    <InventoryDelete inventoryId={inventory._id.toString()} />
                </div>
            </div>
            <Link
                href={`/inventory/${inventory._id}`}
                style={{ display: "contents" }}
            >
                <hr className="h-px border-0 bg-primary mb-2" />
                <div className="flex-grow"></div>
                <div className="flex mt-2">
                    <div className="p-2 w-full">
                        <div className="flex flex-row items-center w-full">
                            <div className="flex justify-start">
                                <strong>Description: </strong>
                            </div>
                            <div className="flex ml-auto justify-end">
                                {inventory.description}
                            </div>
                        </div>
                        <div className="flex flex-row items-center w-full">
                            <div className="flex justify-start">
                                <strong>Status: </strong>
                            </div>
                            <div className="flex ml-auto justify-end">
                                {inventory.assigned_status}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default InventoryCard;
