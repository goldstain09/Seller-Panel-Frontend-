import { ADD_PRODUCT_ERROR, ADD_PRODUCT_START, ADD_PRODUCT_SUCCESS, CREATE_SELLER_ERROR, CREATE_SELLER_START, CREATE_SELLER_SUCCESS, EDIT_SELLER_ERROR, EDIT_SELLER_START, EDIT_SELLER_SUCCESS, LOGIN_SELLER_ERROR, LOGIN_SELLER_START, LOGIN_SELLER_SUCCESS, VERIFY_SELLER_ERROR, VERIFY_SELLER_START, VERIFY_SELLER_SUCCESS } from "./Constants";


//seller
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


export const verifySellerStart = (data) => ({
    type:VERIFY_SELLER_START,
    payload:data
})
export const verifySellerSuccess = (data) => ({
    type:VERIFY_SELLER_SUCCESS,
    payload:data
})
export const verifySellerError = (error) => ({
    type:VERIFY_SELLER_ERROR,
    payload:error
})


export const loginSellerStart = (data) => ({
    type:LOGIN_SELLER_START,
    payload:data
})
export const loginSellerSuccess = (data) => ({
    type:LOGIN_SELLER_SUCCESS,
    payload:data
})
export const loginSellerError = (error) => ({
    type:LOGIN_SELLER_ERROR,
    payload:error
})


export const editSellerStart = (data) => ({
    type:EDIT_SELLER_START,
    payload:data
})
export const editSellerSuccess = (data) => ({
    type:EDIT_SELLER_SUCCESS,
    payload:data
})
export const editSellerError = (error) => ({
    type:EDIT_SELLER_ERROR,
    payload:error
})


//product
export const addProductStart = (data) => ({
    type:ADD_PRODUCT_START,
    payload:data
})
export const addProductSuccess = (data) => ({
    type:ADD_PRODUCT_SUCCESS,
    payload:data
})
export const addProductError = (error) => ({
    type:ADD_PRODUCT_ERROR,
    payload:error
})