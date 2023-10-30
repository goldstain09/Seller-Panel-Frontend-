import { ADD_PRODUCT_ERROR, ADD_PRODUCT_START, ADD_PRODUCT_SUCCESS, CREATE_SELLER_ERROR, CREATE_SELLER_START, CREATE_SELLER_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_ERROR, EDIT_PRODUCT_START, EDIT_PRODUCT_SUCCESS, EDIT_SELLER_ERROR, EDIT_SELLER_START, EDIT_SELLER_SUCCESS, LOGIN_SELLER_ERROR, LOGIN_SELLER_START, LOGIN_SELLER_SUCCESS, LOGOUT_ERROR, LOGOUT_START, LOGOUT_SUCCESS, UPDATE_ORDER_STATUS_ERROR, UPDATE_ORDER_STATUS_START, UPDATE_ORDER_STATUS_SUCCESS, VERIFY_SELLER_ERROR, VERIFY_SELLER_START, VERIFY_SELLER_SUCCESS } from "./Constants";


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

export const logoutStart = () => ({
    type:LOGOUT_START,
})
export const logoutSuccess = () => ({
    type:LOGOUT_SUCCESS,
})
export const logoutError = (error) => ({
    type:LOGOUT_ERROR,
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


export const editProductStart = (data) => ({
    type:EDIT_PRODUCT_START,
    payload:data
})
export const editProductSuccess = (data) => ({
    type:EDIT_PRODUCT_SUCCESS,
    payload:data
})
export const editProductError = (error) => ({
    type:EDIT_PRODUCT_ERROR,
    payload:error
})


export const deleteProductStart = (data) => ({
    type:DELETE_PRODUCT_START,
    payload:data
})
export const deleteProductSuccess = (data) => ({
    type:DELETE_PRODUCT_SUCCESS,
    payload:data
})
export const deleteProductError = (error) => ({
    type:DELETE_PRODUCT_ERROR,
    payload:error
})


export const updateOrderStatusStart = (data) => ({
    type:UPDATE_ORDER_STATUS_START,
    payload:data
})
export const updateOrderStatusSuccess = (data) => ({
    type:UPDATE_ORDER_STATUS_SUCCESS,
    payload:data
})
export const updateOrderStatusError = (error) => ({
    type:UPDATE_ORDER_STATUS_ERROR,
    payload:error
})