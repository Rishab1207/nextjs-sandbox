import axios from "axios";
import { cache } from "react";

export const getUsers = cache(async () => {
    const users = (
        await axios.get("https://64baaf385e0670a501d6887f.mockapi.io/users")
    ).data;

    return users;
});

export const fetchUsers = async () => {
    const users = (await fetch("https://64baaf385e0670a501d6887f.mockapi.io/users")).json();

    return users;
};
