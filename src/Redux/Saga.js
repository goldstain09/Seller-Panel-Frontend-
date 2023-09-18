import {put, takeLatest } from 'redux-saga/effects';
import { CREATE_SELLER_START } from './Constants';
import { createSellerError, createSellerSuccess } from './Actions';
import { createSeller } from './Service';


function* createSellerSaga({payload}) {
    try {
        const res = yield createSeller(payload);
        console.log(res);
        // yield put(createSellerSuccess())
    } catch (error) {
        yield put(createSellerError(error.message));
    }
}

function* Saga(){
    yield takeLatest(CREATE_SELLER_START,createSellerSaga)
};

export default Saga;