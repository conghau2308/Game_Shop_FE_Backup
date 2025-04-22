import axios from "axios"
import { headerAxios, port } from "../ultils/env"
import { handleError } from "./handleError";


export const getAllGameService = async () => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games/all`,
            headers: {
                ...headerAxios
            },
        });

        return response.data;
    }
    catch (error) {
        return handleError(error)
    }
};

export const getLimitedGameService = async (limit) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games/limit`,
            headers: {
                ...headerAxios
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

export const getDetailGameService = async (id) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games/${id}`,
            headers: {
                ...headerAxios
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}


export const getAllGamesWithPlatformService = async () => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games/all/platforms`,
            headers: {
                ...headerAxios
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}


export const getGamesWithPlatformByGameIdService = async (gameId) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games/${gameId}/platforms`,
            headers: {
                ...headerAxios
            },
            params: {
                gameId,
            }
        })

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}


export const getGameWithDetailByGameIdService = async (gameId) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games/${gameId}/detail`,
            headers: {
                ...headerAxios
            },
            params: {
                gameId,
            }
        })

        return response.data
    }
    catch (error) {
        return handleError(error);
    }
}


export const getLimitedGameWithPlatformService = async (platform, limit) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/games/by-platform`,
            headers: {
                ...headerAxios
            },
            params: {
                platform,
                limit
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}