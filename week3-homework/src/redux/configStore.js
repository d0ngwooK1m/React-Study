import {createStore, combineReducers} from "redux";
import quiz from "./modules/quiz";
import name from "./modules/name";

const rootReducer = combineReducers({quiz, name});

const store = createStore(rootReducer);

export default store;