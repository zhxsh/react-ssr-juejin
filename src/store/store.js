import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import homeReducer from "../reducers/homeReducer";
import loginReducer from "../reducers/loginReducer";
import headerReducer from "../reducers/headerReducer";
import articlesReducer from '../reducers/articlesReducer';

export const initializeStore = (initialState = {}) => {
  return createStore(
    combineReducers({
      homeReducer,
      loginReducer,
      headerReducer,
      articlesReducer,
    }),
    initialState,
    applyMiddleware(thunk, logger)
  );
};
