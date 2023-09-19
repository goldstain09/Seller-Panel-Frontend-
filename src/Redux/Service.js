import axios from "axios";

export const createSeller = async (data) => {
  try {
    const ress = await axios.post("http://localhost:8081/seller/create", data);
    return ress.data;
  } catch (error) {
    return error;
  }
};

export const verifySeller = async (data) => {
  try {
    const ress = await axios.get("http://localhost:8081/seller/verify", {
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });
    return ress.data;
  } catch (error) {
    return error;
  }
};
