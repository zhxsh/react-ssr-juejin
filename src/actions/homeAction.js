import * as actionTypes from '../actions/actionTypes';

export const changeWelcome = (welcome) => {
  return {
    type: actionTypes.CHENGE_WELCOME,
    welcome,
  };
};

export const increase = () => {
  return {
    type: actionTypes.COUNT_INCREASE,
  };
};

export const fetchList = (articleList) => {
  return {
    type: actionTypes.GET_TIMELINE,
    payload: {
      articleList,
    },
  };
};
