"use client";

import { faWarehouse, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import InventoryCard from "@/app/(components)/inventory/InventoryCard";
import { useEffect, useState } from "react";
import { InventoryType } from "../(models)/Inventory";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const res = await fetch("/api/Inventory");
                const data = await res.json();

                setInventory(
                    data.inventory.sort(
                        (a: { item: string }, b: { item: string }) => {
                            a.item.localeCompare(b.item);
                        }
                    )
                );
            } catch (error) {
                console.error("Error fetching inventory:", error);
            }
        };

        fetchInventory();
    }, []);

    return (
        <div>
            <div className="min-w-full flex justify-start align-baseline">
                <div className="content-center p-4">
                    <FontAwesomeIcon icon={faWarehouse} className="icon" />
                </div>
                <div className="content-center py-4">
                    <h1 className="text-base-content text-2xl">
                        Inventory Dashboard
                    </h1>
                </div>
            </div>
            <div className="flex-row">
                <div className="content-center p-4">
                    <Link href="/inventory/new" className="btn btn-primary p-4">
                        <FontAwesomeIcon icon={faSquarePlus} className="icon" />
                        Add inventory
                    </Link>
                </div>
                <div className="p-4">
                    <div className="lg:grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {inventory.map((inventory: InventoryType) => (
                            <InventoryCard
                                key={inventory._id.toString()}
                                inventory={inventory}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
