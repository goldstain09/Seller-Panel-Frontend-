import { put, takeLatest } from "redux-saga/effects";
import {
  CREATE_SELLER_START,
  EDIT_SELLER_START,
  LOGIN_SELLER_START,
  VERIFY_SELLER_START,
} from "./Constants";
import {
  createSellerError,
  createSellerSuccess,
  editSellerError,
  editSellerSuccess,
  loginSellerError,
  loginSellerSuccess,
  verifySellerError,
  verifySellerSuccess,
} from "./Actions";
import { createSeller, editSeller, loginSeller, verifySeller } from "./Service";

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

function* Saga() {
  yield takeLatest(CREATE_SELLER_START, createSellerSaga);
  yield takeLatest(VERIFY_SELLER_START, verifySellerSaga);
  yield takeLatest(LOGIN_SELLER_START, loginSellerSaga);
  yield takeLatest(EDIT_SELLER_START, editSellerSaga);
}

export default Saga;
