import { User } from "./user.js";

export function createUser(id, name) {
    return new User(id, name);
}