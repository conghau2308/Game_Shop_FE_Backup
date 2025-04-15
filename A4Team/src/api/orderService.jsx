import axios from "axios"
import { headerAxios, port } from "../ultils/env"
import { handleError } from "./handleError";


export const getAllOrdersService = async () => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/orders/all`,
            headers: {
                // ...headerAxios
            }
        })

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}


export const getOrdersByUserId = async (userId) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/orders/user/${userId}`,
            headers: {
                // ...headerAxios
            },
            params: {
                userId,
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}