import { CREATE_SELLER_SUCCESS } from "./Constants";

const Reducerr = (state, action) => {
  switch (action.type) {
    case CREATE_SELLER_SUCCESS:
      return {
        
      }

    default:
      return state;
  }
};

export default Reducerr;
