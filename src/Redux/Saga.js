import { put, takeLatest } from "redux-saga/effects";
import {
  ADD_PRODUCT_START,
  CREATE_SELLER_START,
  DELETE_PRODUCT_START,
  EDIT_PRODUCT_START,
  EDIT_SELLER_START,
  LOGIN_SELLER_START,
  VERIFY_SELLER_START,
} from "./Constants";
import {
  addProductError,
  addProductSuccess,
  createSellerError,
  createSellerSuccess,
  deleteProductError,
  deleteProductSuccess,
  editProductError,
  editProductSuccess,
  editSellerError,
  editSellerSuccess,
  loginSellerError,
  loginSellerSuccess,
  verifySellerError,
  verifySellerSuccess,
} from "./Actions";
import {
  addProduct,
  createSeller,
  deleteProduct,
  editProduct,
  editSeller,
  loginSeller,
  verifySeller,
} from "./Service";

function* createSellerSaga({ payload }) {
  try {
    const res = yield createSeller(payload);
    if (res.res) {
      switch (res.userCreated) {
        case true:
          yield localStorage.setItem(
            "sellerToken",
            JSON.stringify(res.sellerToken)
          );
          yield put(createSellerSuccess(res));
          break;
        case false:
          throw Error(
            "Something Went Wrong, Unable to Create Account Please Try Again Later..."
          );
        default:
          throw Error("Something Went Wrong...");
      }
    } else if (res.emailAlreadyinUse) {
      yield put(createSellerSuccess(res));
    }
  } catch (error) {
    yield put(createSellerError(error.message));
  }
}

function* verifySellerSaga({ payload }) {
  try {
    const res = yield verifySeller(payload);
    yield put(verifySellerSuccess(res));
  } catch (error) {
    yield put(verifySellerError(error.message));
  }
}

function* loginSellerSaga({ payload }) {
  try {
    const res = yield loginSeller(payload);
    // yield put(loginSellerSuccess(res));
    if (res.res) {
      switch (res.loginSuccess) {
        case true:
          yield localStorage.setItem(
            "sellerToken",
            JSON.stringify(res.sellerToken)
          );
          yield put(loginSellerSuccess(res));
          break;
        case false:
          yield put(loginSellerSuccess(res));
          break;
      }
    } else if (res.someOtherErrorOccured) {
      throw Error("Failed to Login, Please try again Later...");
    } else {
      throw Error("Something went wrong...");
    }
  } catch (error) {
    yield put(loginSellerError(error.message));
  }
}

function* editSellerSaga({ payload }) {
  try {
    const res = yield editSeller(payload);
    if (res.res) {
      switch (res.updated) {
        case true:
          yield localStorage.setItem(
            "sellerToken",
            JSON.stringify(res.sellerToken)
          );
          yield put(editSellerSuccess(res));
          break;
        case false:
          // if pswrd was wrong
          yield put(editSellerSuccess(res));
          break;
        case "alreadyUsedEmail": // i created this in backend bcz here its easy to handle
          yield put(editSellerSuccess(res));

        default:
          throw Error("Something went wrong...");
      }
    } else if (res.someOtherErrorOccured) {
      throw Error("Something went wrong...");
    } else {
      throw Error("Something went wrong...");
    }
  } catch (error) {
    yield put(editSellerError(error.message));
  }
}

//product
function* addProductSaga({ payload }) {
  try {
    const res = yield addProduct(payload);
    if (res.hasOwnProperty("itemSavedSuccessfully")) {
      switch (res.itemSavedSuccessfully) {
        case true:
          yield put(addProductSuccess(res));
          break;
        case false:
          throw Error(
            "Something went wrong while adding your Product, Please try again later"
          );
      }
    }
  } catch (error) {
    yield put(addProductError(error.message));
  }
}

function* editProductSaga({payload}){
   try {
    const res = yield editProduct(payload);
    if(res.hasOwnProperty('productUpdated')){
      switch (res.productUpdated) {
        case true:
          yield put(editProductSuccess(res));
          break;
        case false:
          throw Error("Something went wrong while editing your Product, Please try again later");
      }
    }
   } catch (error) {
    yield put(editProductError(error.message));
   }
}

function* deleteProductSaga({payload}){
  try {
    const res = yield deleteProduct(payload);
    if(res.hasOwnProperty('productDeleted')){
      switch (res.productDeleted) {
        case true:
          yield put(deleteProductSuccess(res));
          break;
        case false:
          throw Error("Something went wrong while deleting your Product, Please try again later");
      }
    }
  } catch (error) {
    yield put(deleteProductError(error.message));
  }
}






function* Saga() {
  //seller
  yield takeLatest(CREATE_SELLER_START, createSellerSaga);
  yield takeLatest(VERIFY_SELLER_START, verifySellerSaga);
  yield takeLatest(LOGIN_SELLER_START, loginSellerSaga);
  yield takeLatest(EDIT_SELLER_START, editSellerSaga);
  //product
  yield takeLatest(ADD_PRODUCT_START, addProductSaga);
  yield takeLatest(EDIT_PRODUCT_START, editProductSaga);
  yield takeLatest(DELETE_PRODUCT_START, deleteProductSaga);
}

export default Saga;
