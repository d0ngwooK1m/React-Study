import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";


import quiz from "./modules/quiz";
import name from "./modules/name";
import rank from "./modules/rank";



export const history = createBrowserHistory();

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({quiz, name, rank});

const store = createStore(rootReducer, enhancer);

export default store;