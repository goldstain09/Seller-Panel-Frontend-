import { CREATE_SELLER_ERROR, CREATE_SELLER_SUCCESS } from "./Constants";

const initialData = {
  createSellerResponse:{}
}

const Reducerr = (state = initialData, action) => {
  switch (action.type) {
    case CREATE_SELLER_SUCCESS:
      return{
        ...state,
        createSellerResponse:action.payload
      }
    case CREATE_SELLER_ERROR:
      return{
        ...state,
        createSellerResponse:action.payload
      }

    default:
      return state;
  }
};

export default Reducerr;
