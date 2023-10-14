import { delay, put, takeLatest } from "redux-saga/effects";
import {
  ADD_PRODUCT_START,
  CREATE_SELLER_START,
  DELETE_PRODUCT_START,
  EDIT_PRODUCT_START,
  EDIT_SELLER_START,
  LOGIN_SELLER_START,
  UPDATE_ORDER_STATUS_START,
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
  updateOrderStatusError,
  updateOrderStatusSuccess,
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
  updateOrderStatus,
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
          yield delay(2000);
          yield put(createSellerSuccess(res));
          break;
        case false:
          throw Error(
            "Unable to create your Account at this time! Please try again after sometime!"
          );
        default:
          throw Error(
            "Unable to create your Account at this time! Please try again after sometime!"
          );
      }
    } else if (res.emailAlreadyinUse) {
      yield delay(2000);
      yield put(createSellerSuccess(res));
    }
  } catch (error) {
    yield delay(2000);
    yield put(createSellerError(error.message));
  }
}

function* verifySellerSaga({ payload }) {
  try {
    const res = yield verifySeller(payload);
    yield delay(2000);
    yield put(verifySellerSuccess(res));
  } catch (error) {
    yield delay(2000);
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
          yield delay(2000);
          yield put(loginSellerSuccess(res));
          break;
        case false:
          yield delay(2000);
          yield put(loginSellerSuccess(res));
          break;
      }
    } else if (res.someOtherErrorOccured) {
      throw Error("Failed to logginning into your Account! Please re-try!");
    } else {
      throw Error("Failed to logginning into your Account! Please re-try!");
    }
  } catch (error) {
    yield delay(2000);
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
          yield delay(2000);
          yield put(editSellerSuccess(res));
          break;
        case false:
          // if pswrd was wrong
          yield delay(2000);
          yield put(editSellerSuccess(res));
          break;
        case "alreadyUsedEmail": // i created this in backend bcz here its easy to handle
          yield delay(2000);
          yield put(editSellerSuccess(res));

        default:
          throw Error(
            "Unable to update your info at this time! Please try again after sometime!"
          );
      }
    } else if (res.someOtherErrorOccured) {
      throw Error(
        "Unable to update your info at this time! Please try again after sometime!"
      );
    } else {
      throw Error(
        "Unable to update your info at this time! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(2000);
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
          yield delay(2000);
          yield put(addProductSuccess(res));
          break;
        case false:
          throw Error(
            "Something went wrong while adding a product! Please try again!"
          );
      }
    }
  } catch (error) {
    yield delay(2000);
    yield put(addProductError(error.message));
  }
}

function* editProductSaga({ payload }) {
  try {
    const res = yield editProduct(payload);
    if (res.hasOwnProperty("productUpdated")) {
      switch (res.productUpdated) {
        case true:
          yield delay(2000);
          yield put(editProductSuccess(res));
          break;
        case false:
          throw Error("Unable to Update your Product! Please try again!");
      }
    }
  } catch (error) {
    yield delay(2000);
    yield put(editProductError(error.message));
  }
}

function* deleteProductSaga({ payload }) {
  try {
    const res = yield deleteProduct(payload);
    if (res.hasOwnProperty("productDeleted")) {
      switch (res.productDeleted) {
        case true:
          yield delay(2000);
          yield put(deleteProductSuccess(res));
          break;
        case false:
          throw Error(
            "Something went wrong while deleting this Product! Please re-try!"
          );
      }
    }
  } catch (error) {
    yield delay(2000);
    yield put(deleteProductError(error.message));
  }
}

function* updateOrderStatusSaga({ payload }) {
  try {
    const res = yield updateOrderStatus(payload);
    if (res.hasOwnProperty("statusUpdated")) {
      switch (res.statusUpdated) {
        case true:
          yield put(updateOrderStatusSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("someOtherErrorOccured")) {
            throw Error(
              "Unable to update the order status at this time! Please try again after some time!"
            );
          } else {
            throw Error(
              "Unable to update the order status at this time! Please try again after some time!"
            );
          }
      }
    } else {
      throw Error(
        "Unable to update the order status at this time! Please try again after some time!"
      );
    }
  } catch (error) {
    yield delay(2000);
    yield put(updateOrderStatusError(error.message));
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

  //update order status
  yield takeLatest(UPDATE_ORDER_STATUS_START, updateOrderStatusSaga);
}

export default Saga;
