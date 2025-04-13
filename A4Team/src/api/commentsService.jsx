import axios from "axios"
import { port, headerAxios } from "../ultils/env"
import { handleError } from "./handleError";


export const getAllCommentsService = async () => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/comments/all`,
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

export const getLimitedCommentsService = async (limit) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/comments/limit`,
            headers: {
                // ...headerAxios
            },
            params: {
                limit,
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}

export const getListCommentsByGameIdService = async (gameId) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/comments/by-game`,
            headers: {
                // ...headerAxios
            },
            params: {
                gameId
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}