// import {legacy_createStore as createStore} from "redux"

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// Logger with default options
import logger from "redux-logger";

import counterReducer from "./counter/counterReducer";
import usernameReducer from "./username/usernameReducer";

/*
 1- Just DevTools
 const store = createStore(counterReducer, composeWithDevTools());
*/

/*
 2- Just redux-loger
 const store = createStore(counterReducer, applyMiddleware(logger));
*/

/*
 3 using both dev-tools and redux-logger
 const store = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger)));
*/

//4 using both dev-tools and redux-logger and also multiple reducers

const rootReducer = combineReducers({
   counterState: counterReducer,
   usernameState: usernameReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
