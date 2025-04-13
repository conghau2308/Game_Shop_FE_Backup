import axios from "axios"
import { port, headerAxios } from "../ultils/env"
import { handleError } from "./handleError";


export const getAllReviewsService = async () => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/reviews/all`,
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

export const getLimitedReviewsService = async (limit) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/reviews/limit`,
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

export const getListReviewsByGameIdService = async (gameId) => {
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

export const getListReviewsByUserIdService = async (userId) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/reviews/by-user`,
            headers: {
                // ...headerAxios
            },
            params: {
                userId
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}