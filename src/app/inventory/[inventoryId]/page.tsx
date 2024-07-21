import InventoryForm from "../../(components)/inventory/InventoryForm";

const getInventoryById = async (inventoryId: string) => {
    try {
        const res = await fetch(
            `http://localhost:3000/api/Inventory/${inventoryId}`
        );

        if (!res.ok) {
            throw new Error("Failed to fetch inventory");
        }

        const inventory = await res.json();
        return inventory;
    } catch (error) {
        console.log("Error fetching inventory: ", error);
        return null;
    }
};

const InventoryAandE = async ({
    params,
}: {
    params: { inventoryId: string };
}) => {
    const EDITMODE = params.inventoryId === "new" ? false : true;
    let updateInventoryData = {};

    if (EDITMODE) {
        updateInventoryData = await getInventoryById(params.inventoryId);
    } else {
        updateInventoryData = {
            _id: "new",
        };
    }

    return (
        <div className="p-4">
            <InventoryForm inventory={updateInventoryData} />
        </div>
    );
};

export default InventoryAandE;
