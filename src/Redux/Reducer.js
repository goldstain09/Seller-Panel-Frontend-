import { ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS, CREATE_SELLER_ERROR, CREATE_SELLER_SUCCESS, EDIT_SELLER_SUCCESS, LOGIN_SELLER_SUCCESS, VERIFY_SELLER_ERROR, VERIFY_SELLER_SUCCESS } from "./Constants";

const initialData = {
  createSellerResponse:{},
  verifySellerResponse:{},
  loginSellerResponse:{},
  editSellerResponse:{},
  addProductResponse:{},
  addproductError:''
}
// errors bhi set krne hai 

const Reducerr = (state = initialData, action) => {
  switch (action.type) {
    case CREATE_SELLER_SUCCESS:
      return{
        ...state,
        createSellerResponse:action.payload
      }
    // case CREATE_SELLER_ERROR:
    //   return{
    //     ...state,
    //     createSellerResponse:action.payload
    //   }

    case VERIFY_SELLER_SUCCESS:
      return {
        ...state,
        verifySellerResponse:action.payload
      }
    // case VERIFY_SELLER_ERROR:
    //   return {
    //     ...state,
    //     verifySellerResponse:action.payload
    //   }

    case LOGIN_SELLER_SUCCESS:
      return {
        ...state,
        loginSellerResponse:action.payload
      }


    case EDIT_SELLER_SUCCESS:
      return {
        ...state,
        editSellerResponse:action.payload
      }

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductResponse:action.payload
      }
    case ADD_PRODUCT_ERROR:
      return{
        ...state,
        addproductError:action.payload
      }


    default:
      return state;
  }
};

export default Reducerr;
