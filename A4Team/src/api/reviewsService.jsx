import axios from "axios"
import { port, headerAxios } from "../ultils/env"
import { handleError } from "./handleError";


export const getAllReviewsService = async () => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/reviews/all`,
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

export const getLimitedReviewsService = async (limit) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/reviews/limit`,
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
        return handleError(error);
    }
}

export const getListReviewsByGameIdService = async (gameId, useFul = null) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/reviews/by-game`,
            headers: {
                ...headerAxios
            },
            params: {
                gameId,
                ...(useFul !== null && { useFul })
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
                ...headerAxios
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


export const ReviewGameServiceSubmit = async (data) => {
    try {
        const response = await axios.request({
            method: "POST",
            url: `${port}/api/reviews/review-game`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                userId: data.userId,
                gameId: data.gameId,
                createdAt: data.createdAt,
                status: data.status,
                useFul: data.useFul,
                comment: data.comment
            },
        });
        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}