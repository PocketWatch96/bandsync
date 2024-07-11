"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const AggGigsForm = () => {
    const defClValues = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
    };

    const [formData, setFormData] = useState(defClValues);
    const router = useRouter();

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

        const res = await fetch("/api/Clients", {
            method: "POST",
            body: JSON.stringify({ formData }),
            headers: { "content-type": "application/json" },
        });

        if (!res.ok) {
            console.log("Res: ", res);
            throw new Error("Failed to add client");
        }

        router.refresh();
        router.push("/");
    };

    return (
        <div className="flex justify-center">
            <form
                className="bg-base-300 p-11 rounded-xl gap-3 w-1/2"
                method="POST"
                onSubmit={handleSubmit}
            >
                <h3 className="text-2xl">Add a client</h3>

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
                        value="Add client"
                        className="btn btn-primary w-full"
                    />
                </div>
            </form>
        </div>
    );
};

export default AggGigsForm;
