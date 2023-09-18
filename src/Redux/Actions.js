import { CREATE_SELLER_ERROR, CREATE_SELLER_START, CREATE_SELLER_SUCCESS } from "./Constants";

export const createSellerStart = (data) => ({
    type:CREATE_SELLER_START,
    payload:data
})
export const createSellerSuccess = (data) => ({
    type:CREATE_SELLER_SUCCESS,
    payload:data
})
export const createSellerError = (error) => ({
    type:CREATE_SELLER_ERROR,
    payload:error
})