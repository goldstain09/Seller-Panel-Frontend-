import { put, takeLatest } from "redux-saga/effects";
import { CREATE_SELLER_START, VERIFY_SELLER_START } from "./Constants";
import { createSellerError, createSellerSuccess } from "./Actions";
import { createSeller } from "./Service";

function* createSellerSaga({ payload }) {
  try {
    const res = yield createSeller(payload);
    if (res.res) {
      switch (res.userCreated) {
        case true:
          yield localStorage.setItem('sellerToken', JSON.stringify(res.sellerToken));
          yield put(createSellerSuccess(res));
          break;
        case false:
          throw Error("Something Went Wrong..." );
      }
    } else if(res.emailAlreadyinUse){
      yield put(createSellerSuccess(res));
    }
  } catch (error) {
    yield put(createSellerError(error.message));
  }
}

function* verifySellerSaga(){
    try {
        
    } catch (error) {
        
    }
}

function* Saga() {
  yield takeLatest(CREATE_SELLER_START, createSellerSaga);
  yield takeLatest(VERIFY_SELLER_START, verifySellerSaga);
}

export default Saga;
