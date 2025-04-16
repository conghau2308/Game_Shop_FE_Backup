import axios from "axios"
import { headerAxios, port } from "../ultils/env"
import { handleError } from "./handleError";


export const getProfile = async (
    token,
    setToken
) => {
    try {
        const response = await axios.request({
            url: `${port}/api/user/me`,
            headers: {
                // ...headerAxios,
                Authorization: `Bearer ${token}`,
            },
        });
        if (response?.data && token) {
            setToken(token, response?.data);
            return response;
        }
        else {
            return "Lấy thông tin thất bại"
        }
    }
    catch (error) {
        return handleError(error)
    }
};


export const updateUserProfile = async (token, data) => {
    try {
        const response = await axios.request({
            method: "PUT",
            url: `${port}/api/user/update`,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                birthDate: data.birthDate,
                nickName: data.nickName
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}


export const changeEmailUser = async (token, data) => {
    try {
        const response = await axios.request({
            method: "PUT",
            url: `${port}/api/user/change-email`,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            data: {
                currentPassword: data.currentPassword,
                newEmail: data.newEmail
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}


export const changePasswordUser = async (token, data) => {
    try {
        const response = await axios.request({
            method: "PUT",
            url: `${port}/api/user/change-password`,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            data: {
                oldPassword: data.currentPassword,
                newPassword: data.newPassword
            }
        });

        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}