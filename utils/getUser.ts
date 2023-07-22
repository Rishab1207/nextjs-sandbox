import axios from "axios";
import { cache } from "react";

const URL = 'https://64baaf385e0670a501d6887f.mockapi.io/users'

export const getUsers = cache(async () => {
    const users = (
        await axios.get(URL)
    ).data;

    return users;
});

export const fetchUsers = async () => {
    const users = (await fetch(URL)).json();

    return users;
};
