import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";

import bucket from "./modules/bucket";

const middlewares = [thunk];
const rootReducer = combineReducers({bucket});
//리듀서 모으기

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;