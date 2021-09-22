import {createStore, combineReducers} from 'redux';
import bucket from "./modules/bucket";

const rootReducer = combineReducers({bucket});
//리듀서 모으기

const store = createStore(rootReducer);

export default store;