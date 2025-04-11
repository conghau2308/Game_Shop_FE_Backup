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