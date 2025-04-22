import axios from "axios";
import { port } from "../../ultils/env";
import { handleError } from "../handleError";


const handleFormSubmitService = async (formData) => {
  try {
    const response = await axios.request({
      method: "POST",
      url: `${port}/api/auth/login-with-password`,
      headers: {
        ...headerAxios,
        "Content-Type": "application/json",
      },
      data: formData
    });
    return response.data
  }
  catch (error) {
    return handleError(error);
  }
}

export { handleFormSubmitService }