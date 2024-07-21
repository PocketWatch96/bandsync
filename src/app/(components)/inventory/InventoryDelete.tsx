"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

interface PageProps {
    inventoryId: string;
}

const InventoryDelete = ({ inventoryId }: PageProps) => {
    const router = useRouter();

    const deleteInventory = async () => {
        try {
            const res = await fetch(`/api/Inventory/${inventoryId}`, {
                method: "DELETE",
            });

            if (res.ok) {
                window.location.reload();
            } else {
                console.error("Failed to delete inventory");
            }
        } catch (error) {
            console.error("Error deleting inventory:", error);
        }
    };

    return (
        <FontAwesomeIcon
            icon={faX}
            className="icon hover:cursor-pointer hover:text-xButtonRed"
            onClick={deleteInventory}
        />
    );
};

export default InventoryDelete;
