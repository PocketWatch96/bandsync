"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs"; // Import Clerk's useAuth hook

const AggGigsForm = ({ client }: { client: any }) => {
    const defClValues = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        cUserId: "",  // Add userId to default values
        cOrgId: "",   // Add orgId to default values
    };

    const [formData, setFormData] = useState(defClValues);
    const router = useRouter();
    const { userId, orgId } = useAuth(); // Get userId and orgId from Clerk

    const EDITMODE = client._id === "new" ? false : true;
    let formHeading = "Add a client";
    let formButtonText = "Add client";
    let formMethod = "POST";
    let putPath = ""

    if (EDITMODE) {
        defClValues["fname"] = client.fname;
        defClValues["lname"] = client.lname;
        defClValues["email"] = client.email;
        defClValues["phone"] = client.phone;
        formHeading = "Update client information";
        formButtonText = "Update client";
        formMethod = "PUT";
        putPath = client._id
    }

    useEffect(() => {
        // Set userId and orgId in formData when component mounts
        setFormData((prevState) => (
            {
            ...prevState,
            cUserId: userId || "User id seems to be null",
            cOrgId: orgId || "",
        }));
        console.log("UserID: ", formData.cUserId)
    }, [userId, orgId]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const name = event.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Submitted client info");

        const res = await fetch(`/api/Clients/${putPath}`, {
            method: formMethod,
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" },
        });

        if (!res.ok) {
            throw new Error(formMethod === "POST" ? "Failed to create client" : "Failed to update client")
        }

        router.refresh();
        router.push("/clients");
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
                        First name:
                        <input
                            id="fname"
                            name="fname"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.fname}
                            className="grow"
                            placeholder="First name"
                        />
                    </label>
                </div>

                <div className="p-4">
                    <label className="input input-bordered flex items-center gap-2">
                        Last name
                        <input
                            id="lname"
                            name="lname"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.lname}
                            className="grow"
                            placeholder="Last name"
                        />
                    </label>
                </div>

                <div className="p-4">
                    <label className="input input-bordered flex items-center gap-2">
                        E-mail:
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            required={true}
                            value={formData.email}
                            className="grow"
                            placeholder="example@someone.com"
                        />
                    </label>
                </div>

                <div className="p-4">
                    <label className="input input-bordered flex items-center gap-2">
                        Phone:
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={handleChange}
                            required={true}
                            value={formData.phone}
                            className="grow"
                            placeholder="1234567890"
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

export default AggGigsForm;