import { createStore, applyMiddleware, combineReducers } from "redux";
import homeReducer from "./src/reducers/homeReducer";
import loginReducer from "./src/reducers/loginReducer";

export const initializeStore = (initialState = {}) => {
  return createStore(
    combineReducers({ homeReducer, loginReducer }),
    initialState,
    applyMiddleware()
  );
};
