"use server";

import { clerkClient } from "@clerk/nextjs/server";

export const setRole = async (userId: string, role: string) => {
    try {
        const response = await clerkClient().users.updateUser(userId, {
            publicMetadata: { role: "bandLeader" },
        });
        return { message: response.publicMetadata };
    } catch (error) {
        return { message: error };
    }
};
