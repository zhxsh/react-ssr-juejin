import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loginName: "张三"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_NAME:
      return { ...state, ...payload };

    default:
      return state;
  }
};
