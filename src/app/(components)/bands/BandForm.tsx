"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useAuth, useOrganizationList } from "@clerk/nextjs"; // Import Clerk's useAuth hook
import { setRole } from "./AddRole";

const BandForm = ({ band }: { band: any }) => {
    const defBandValues = {
        bandName: "",
        adminId: "", // Assign userId to adminId
        bOrgId: "", // Assign orgId to bOrgId
    };

    const [formData, setFormData] = useState(defBandValues);
    const router = useRouter();
    const { createOrganization, setActive } = useOrganizationList();
    const { userId } = useAuth();

    const EDITMODE = band._id === "new" ? false : true;
    let formHeading = "Create a band";
    let formButtonText = "Create band";
    let formMethod = "POST";
    let putPath = "";

    if (EDITMODE) {
        defBandValues["bandName"] = band.bandName;
        formHeading = "Change band name";
        formButtonText = "Update band  name";
        formMethod = "PUT";
        putPath = band._id;
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const bName = event.target.value;

        setFormData((prevState) => ({
            ...prevState,
            bandName: bName,
        }));
    };

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        let newOrgId = "";

        console.log("Submitted band info");

        // Create a new Clerk organization
        if (createOrganization) {
            const newOrg = await createOrganization({
                name: formData.bandName,
            });
            console.log("Org created");

            // Set the new organization as active
            if (newOrg && newOrg.id) {
                newOrgId = newOrg.id;
                console.log("New org ID: ", newOrgId);
                setActive({ organization: newOrg.id });

                // Create a local variable to hold the updated form data
                const updatedFormData = {
                    ...formData,
                    adminId: userId || "User id seems to be null",
                    bOrgId: newOrgId || "",
                };
                console.log("updatedFormData: ", updatedFormData);
                // Update the state with the new form data
                setFormData(updatedFormData);
                console.log("Form Data: ", formData);

                // set role
                if (userId) {
                    setRole(userId, "bandLeader");
                }

                // Send the data to your API using the local variable
                const res = await fetch(`/api/Bands/${putPath}`, {
                    method: formMethod,
                    body: JSON.stringify(updatedFormData),
                    headers: { "content-type": "application/json" },
                });

                if (!res.ok) {
                    throw new Error(
                        formMethod === "POST"
                            ? "Failed to create band"
                            : "Failed to update band"
                    );
                }

                router.refresh();
                router.push("/bands");
            }
        }
    };

    return (
        <div className="flex justify-center">
            <form
                className="bg-base-300 p-11 rounded-xl gap-3 w-1/2"
                method="POST"
                onSubmit={handleSubmit}
            >
                <h3 className="text-2xl">{formHeading}</h3>

                <div className="p-4">
                    <label className="input input-bordered flex items-center gap-2">
                        Band name:
                        <input
                            id="bandName"
                            name="bandName"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.bandName}
                            className="grow"
                            placeholder="Band name"
                        />
                    </label>
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

export default BandForm;
