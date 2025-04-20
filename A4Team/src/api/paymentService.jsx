import axios from "axios"
import { headerAxios, port } from "../ultils/env"
import { handleError } from "./handleError";


export const makePaymentService = async (params) => {
    try {
        const response = await axios.request({
            method: "POST",
            url: `${port}/api/payment/submitOrder`,
            headers: {
                // ...headerAxios,
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`
            },
            params: {
                amount: params.amount
            }
        });

        return response;
    }
    catch (error) {
        return handleError(error);
    }
}


export const checkPaymentStatus = async (params) => {
    try {
        const response = await axios.request({
            method: "GET",
            url: `${port}/api/payment/vnpay-payment`,
            headers: {
                // ...headerAxios
            },
            params: {
                vnp_Amount: params.vnp_Amount,
                vnp_TransactionNo: params.vnp_TransactionNo,
                vnp_TransactionStatus: params.vnp_TransactionStatus
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}