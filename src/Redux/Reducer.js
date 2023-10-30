import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  CREATE_SELLER_ERROR,
  CREATE_SELLER_START,
  CREATE_SELLER_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_SELLER_ERROR,
  EDIT_SELLER_START,
  EDIT_SELLER_SUCCESS,
  LOGIN_SELLER_ERROR,
  LOGIN_SELLER_START,
  LOGIN_SELLER_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  UPDATE_ORDER_STATUS_ERROR,
  UPDATE_ORDER_STATUS_START,
  UPDATE_ORDER_STATUS_SUCCESS,
  VERIFY_SELLER_ERROR,
  VERIFY_SELLER_START,
  VERIFY_SELLER_SUCCESS,
} from "./Constants";

const initialData = {
  createSellerResponse: {},
  createSellerResponseLoading: false,
  createSellerResponseError: "",

  verifySellerResponse: {},
  verifySellerResponseLoading: false,
  verifySellerResponseError: "",

  loginSellerResponse: {},
  loginSellerResponseLoading: false,
  loginSellerResponseError: "",

  editSellerResponse: {},
  editSellerResponseLoading: false,
  editSellerResponseError: "",

  addProductResponse: {},
  addProductResponseLoading: false,
  addproductError: "",

  editProductResponse: {},
  editProductResponseLoading: false,
  editProductError: "",

  deleteProductResponse: {},
  deleteProductResponseLoading: false,
  deleteProductError: "",

  //order status updation response
  orderStatusUpdationResponse: {},
  orderStatusUpdationResponseLoading: false,
  orderStatusUpdationResponseError: "",
}; // changed
// errors bhi set krne hai

const Reducerr = (state = initialData, action) => {
  switch (action.type) {
    case CREATE_SELLER_START:
      return {
        ...state,
        createSellerResponseLoading: true,
        createSellerResponseError: "",
      };
    case CREATE_SELLER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        createSellerResponse: action.payload,
        verifySellerResponse: action.payload,
        createSellerResponseLoading: false,
        createSellerResponseError: "",
      };
    case CREATE_SELLER_ERROR:
      return {
        ...state,
        createSellerResponseError: action.payload,
        createSellerResponseLoading: false,
      };
    // -------------------------------------------------------------
    case VERIFY_SELLER_START:
      return {
        ...state,
        verifySellerResponseLoading: true,
        verifySellerResponseError: "",
      };
    case VERIFY_SELLER_SUCCESS:
      return {
        ...state,
        verifySellerResponse: action.payload,
        verifySellerResponseLoading: false,
        verifySellerResponseError: "",
      };
    case VERIFY_SELLER_ERROR:
      return {
        ...state,
        verifySellerResponseLoading: false,
        verifySellerResponseError: action.payload,
      };
    // --------------------------------------------------------------

    case LOGIN_SELLER_START:
      return {
        ...state,
        loginSellerResponseLoading: true,
        loginSellerResponseError: "",
      };
    case LOGIN_SELLER_SUCCESS:
      return {
        ...state,
        loginSellerResponse: action.payload,
        verifySellerResponse: action.payload,
        loginSellerResponseLoading: false,
        loginSellerResponseError: "",
      };
    case LOGIN_SELLER_ERROR:
      return {
        ...state,
        loginSellerResponseLoading: false,
        loginSellerResponseError: action.payload,
      };
    // --------------------------------------------------------------

    case LOGOUT_START:
      return {
        ...state,
        verifySellerResponseLoading: true,
        verifySellerResponseError: "",
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loginSellerResponse: {},
        verifySellerResponse: { logout: true },
        createSellerResponse: {},
        verifySellerResponseLoading: false,
        verifySellerResponseError: "",
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        verifySellerResponseLoading: false,
        verifySellerResponseError: action.payload,
      };
    // --------------------------------------------------------------

    case EDIT_SELLER_START:
      return {
        ...state,
        editSellerResponseLoading: true,
        editSellerResponseError: "",
      };
    case EDIT_SELLER_SUCCESS:
      return {
        ...state,
        editSellerResponse: action.payload,
        editSellerResponseLoading: false,
        editSellerResponseError: "",
      };
    case EDIT_SELLER_ERROR:
      return {
        ...state,
        editSellerResponseLoading: false,
        editSellerResponseError: action.payload,
      };
    // --------------------------------------------------------------

    case ADD_PRODUCT_START:
      return {
        ...state,
        addProductResponseLoading: true,
        addproductError: "",
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductResponse: action.payload,
        addProductResponseLoading: false,
        addproductError: "",
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        addproductError: action.payload,
        addProductResponseLoading: false,
      };
    // --------------------------------------------------------------

    case EDIT_PRODUCT_START:
      return {
        ...state,
        editProductResponseLoading: true,
        editProductError: "",
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editProductResponse: action.payload,
        editProductResponseLoading: false,
        editProductError: "",
      };
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        editProductError: action.payload,
        editProductResponseLoading: false,
      };
    // --------------------------------------------------------------

    case DELETE_PRODUCT_START:
      return {
        ...state,
        deleteProductResponseLoading: true,
        deleteProductError: "",
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deleteProductResponse: action.payload,
        deleteProductResponseLoading: false,
        deleteProductError: "",
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        deleteProductError: action.payload,
        deleteProductResponseLoading: false,
      };
    // --------------------------------------------------------------

    case UPDATE_ORDER_STATUS_START:
      return {
        ...state,
        orderStatusUpdationResponseLoading: true,
        orderStatusUpdationResponseError: "",
      };
    case UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        orderStatusUpdationResponse: action.payload,
        orderStatusUpdationResponseLoading: false,
        orderStatusUpdationResponseError: "",
      };
    case UPDATE_ORDER_STATUS_ERROR:
      return {
        ...state,
        orderStatusUpdationResponseLoading: false,
        orderStatusUpdationResponseError: action.payload,
      };

    default:
      return state;
  }
};

export default Reducerr;
