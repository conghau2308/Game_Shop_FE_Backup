import axios from "axios"
import { headerAxios, port } from "../ultils/env"
import { handleError } from "./handleError";


export const getAllGameWithPriceService = async () => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games-prices/all`,
            headers: {
                // ...headerAxios
            },
        });

        return response.data;
    }
    catch (error) {
        return handleError(error)
    }
};

export const getLimitedGameWithPriceService = async (limit) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games-prices/limit`,
            headers: {
                // ... headerAxios
            },
            params: {
                limit,
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error)
    }
};

export const getDetailGameWithPriceService = async (game_id) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games-prices/${game_id}`,
            headers: {
                // ... headerAxios
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}