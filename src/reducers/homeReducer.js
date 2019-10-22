import * as actionTypes from "../actions/actionTypes";

export const exampleState = {
  welcome: "欢迎使用next.js",
  count: 0
};

const homeReducer = (state = exampleState, action) => {
  switch (action.type) {
    case actionTypes.CHENGE_WELCOME:
      return {
        ...state,
        welcome: action.welcome
      };
    case actionTypes.COUNT_INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

export default homeReducer;
