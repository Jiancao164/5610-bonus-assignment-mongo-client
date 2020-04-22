import {WEBDEV_SERVER_URL} from "../common/constant";

export const findAllUsers = async () => {
    let response = await fetch(`${WEBDEV_SERVER_URL}/nuids`);
    return await response.json()
    // await fetch(`${WEBDEV_SERVER_URL}/nuids`)
    //     .then(response => response.json())
};