import axios from "axios";


//seller
export const createSeller = async (data) => {
  try {
    const ress = await axios.post("http://localhost:8081/seller/create", data);
    return ress.data;
  } catch (error) {

    //yha prr error retunr nhi krege kyuki vo aage jake problem krskta hai
    //agr by chance api s data fecth krne me error ajata hai to saga me response me to error hi hcle jna hai isliye 
    // yha alg s error page bnake krege 
    // ek case me default m krdiya check it later
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

export const loginSeller = async (data) => {
  try {
    const ress =  await axios.post("http://localhost:8081/seller/login", data);
    return ress.data;
  } catch (error) {
    return error;
  }
}

export const editSeller = async (data) => {
  try {
    const ress =  await axios.post("http://localhost:8081/seller/edit", data);
    return ress.data;
  } catch (error) {
    return error;
  }
}

//product

export const addProduct = async (data) => {
  try {
    const ress  = await axios.post('http://localhost:8081/api/addproduct', data);
    return ress.data;
  } catch (error) {
    return error
  }
}

export const editProduct = async (data) => {
  try {
    const ress = await axios.post('http://localhost:8081/api/editproduct',data);
    return ress.data;
  } catch (error) {
    return error
  }
}

export const deleteProduct = async (data) => {
  try {
    const ress = await axios.post('http://localhost:8081/api/deleteproduct', data);
    return ress.data;
  } catch (error) {
    return error
  }
}


export const updateOrderStatus = async (data) => {
  try {
    const ress = await axios.post("http://localhost:8081/seller/updateorderstatus",data);
    return ress.data;
  } catch (error) {
    return error;
  }
}