export {};

// Create type for the roles
export type Roles = "bandLeader" | "member";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        };
    }
}
