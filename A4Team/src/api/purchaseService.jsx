import axios from "axios"
import { headerAxios, port } from "../ultils/env"
import { handleError } from "./handleError";


export const createPaymentService = async (data) => {
    try {
        const response = await axios.request({
            method: "POST",
            url: `${port}/api/order-purchases/order`,
            headers: {
                ...headerAxios,
                "Content-Type": "application/json"
            },
            data: {
                // Cấu trúc JSON phù hợp với OrderRequest
                purchaseRequest: {
                    userId: data.purchaseRequest.userId,
                    gameId: data.purchaseRequest.gameId,
                    paymentType: data.purchaseRequest.paymentType,
                    totalPrice: data.purchaseRequest.totalPrice,
                    status: data.purchaseRequest.status
                },
                purchaseHistoryRequest: {
                    downloadUrl: data.purchaseHistoryRequest.downloadUrl,
                    rewardPoint: data.purchaseHistoryRequest.rewardPoint
                }
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}


export const createPurchaseHistoryService = async (data) => {
    try {
        const response = await axios.request({
            method: "POST",
            url: `${port}/api/order-purchases/order`,
            headers: {
                ...headerAxios,
                "Content-Type": "application/json"
            },
            data: {
                // paymentId: data.paymentId,
                activated: data.activated
            }
        })
    }
    catch (error) {
        return handleError(error);
    }
}