"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const AddInventoryForm = ({ inventory }: { inventory: any }) => {
    const defInValues = {
        item: "",
        description: "",
        type: "",
        assigned_status: "",
    };

    const [formData, setFormData] = useState(defInValues);
    const router = useRouter();
    const EDITMODE = inventory._id === "new" ? false : true;
    let formHeading = "Add inventory";
    let formButtonText = "Add inventory";
    let formMethod = "POST";
    let putPath = "";

    if (EDITMODE) {
        defInValues["item"] = inventory.item;
        defInValues["description"] = inventory.description;
        defInValues["type"] = inventory.type;
        defInValues["assigned_status"] = inventory.assigned_status;
        formHeading = "Update inventory information";
        formButtonText = "Update inventory";
        formMethod = "PUT";
        putPath = inventory._id;
    }

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const value = event.target.value;
        const name = event.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Submitting inventory info...");

        const res = await fetch(`/api/Inventory/${putPath}`, {
            method: formMethod,
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" },
        });

        if (!res.ok) {
            throw new Error(
                formMethod === "POST"
                    ? "Failed to create inventory"
                    : "Failed to update inventory"
            );
        }

        router.refresh();
        router.push("/inventory");
    };

    return (
        <div className="flex justify-center">
            <form
                className="bg-base-300 justify-items-center p-11 rounded-xl gap-3 sm:w-11/12 md:w-4/5 lg:w-9/12 xl:w-7/12 2xl:w-1/2"
                method="POST"
                onSubmit={handleSubmit}
            >
                <h3 className="text-2xl">{formHeading}</h3>

                <div className="p-4 justify-items-center">
                    <label className="input input-bordered flex items-center gap-2">
                        Item:
                        <input
                            id="item"
                            name="item"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.item}
                            className="grow"
                            placeholder="Item"
                        />
                    </label>
                </div>

                <div className="p-4">
                    <label className="input input-bordered flex items-center gap-2">
                        Description:
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={handleChange}
                            required={false}
                            value={formData.description}
                            className="grow"
                            placeholder="Description"
                        />
                    </label>
                </div>

                <div className="p-4">
                    <select
                        name="type"
                        defaultValue={formData.type}
                        onChange={handleChange}
                        className="select select-bordered flex items-center gap-2 w-full"
                        required={true}
                    >
                        <option disabled value="">
                            Select type
                        </option>
                        <option value="Instrument">Instrument</option>
                        <option value="Sound">Sound</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                </div>

                <div className="p-4">
                    <select
                        name="assigned_status"
                        defaultValue={formData.assigned_status}
                        onChange={handleChange}
                        className="select select-bordered flex items-center gap-2 w-full"
                        required={true}
                    >
                        <option disabled value="">
                            Select status
                        </option>
                        <option value="In warehouse">In warehouse</option>
                        <option value="Out for gig">Out for gig</option>
                        <option value="Repair">Repair</option>
                        <option value="Rented out">Rented out</option>
                    </select>
                </div>

                <div className="p-4">
                    <input
                        type="submit"
                        value={formButtonText}
                        className="btn btn-primary w-full"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddInventoryForm;
