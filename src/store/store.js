import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';

import homeReducer from "../reducers/homeReducer";
import loginReducer from "../reducers/loginReducer";
import headerReducer from "../reducers/headerReducer";

export const initializeStore = (initialState = {}) => {
  return createStore(
    combineReducers({ homeReducer, loginReducer, headerReducer }),
    initialState,
    applyMiddleware(logger)
  );
};
