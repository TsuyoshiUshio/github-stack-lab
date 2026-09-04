import { createUser } from "./user-service.js";

export function handleCreateUser(id, name) {
    return {
        status: 200,
        body: createUser(id, name)
    };
}