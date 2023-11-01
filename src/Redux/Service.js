import axios from "axios";

//seller
export const createSeller = async (data) => {
  try {
    const ress = await axios.post("/seller/create", data);
    return ress.data;
  } catch (error) {
    throw Error(
      "Unable to create your Account at this time! Please try again after sometime!"
    );
  }
};

export const verifySeller = async (data) => {
  try {
    const ress = await axios.get("/seller/verify", {
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });
    return ress.data;
  } catch (error) {
    throw Error(
      "Unable to fetch your Account Information! Please try to Login Or Sign Up if you don't have Account!"
    );
  }
};

export const loginSeller = async (data) => {
  try {
    const ress = await axios.post("/seller/login", data);
    return ress.data;
  } catch (error) {
    throw Error("Failed to logginning into your Account! Please re-try!");
  }
};

export const editSeller = async (data) => {
  try {
    const ress = await axios.post("/seller/edit", data);
    return ress.data;
  } catch (error) {
    throw Error(
      "Unable to update your info at this time! Please try again after sometime!"
    );
  }
};

//product

export const addProduct = async (data) => {
  try {
    const ress = await axios.post("/api/addproduct", data);
    return ress.data;
  } catch (error) {
    throw Error(
      "Something went wrong while adding a product! Please try again!"
    );
  }
};

export const editProduct = async (data) => {
  try {
    const ress = await axios.post("/api/editproduct", data);
    return ress.data;
  } catch (error) {
    throw Error("Unable to Update your Product! Please try again!");
  }
};

export const deleteProduct = async (data) => {
  try {
    const ress = await axios.post("/api/deleteproduct", data);
    return ress.data;
  } catch (error) {
    throw Error(
      "Something went wrong while deleting this Product! Please re-try!"
    );
  }
};

export const updateOrderStatus = async (data) => {
  try {
    const ress = await axios.post("/seller/updateorderstatus", data);
    return ress.data;
  } catch (error) {
    throw Error(
      "Unable to update the order status at this time! Please try again after some time!"
    );
  }
};
