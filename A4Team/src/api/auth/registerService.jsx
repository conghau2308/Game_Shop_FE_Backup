import axios from "axios"
import { port } from "../../ultils/env"
import { handleError } from "../handleError";


const RegisterServiceSubmit = async (data) => {
    try {
        const response = await axios.request({
            method: "POST",
            url: `${port}/api/auth/register`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                birthDate: data.birthDate,
                country_id: data.country_id
            },
        });
        return response.data;
    }
    catch (error) {
        return handleError(error);
    }
}

export { RegisterServiceSubmit };