import { configureStore } from "@reduxjs/toolkit";
import Reducerr from "./Reducer";
import createSagaMiddleware from "redux-saga";
import Saga from "./Saga";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: Reducerr,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(Saga);

export default Store;
