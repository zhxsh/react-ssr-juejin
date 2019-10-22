import * as actionTypes from "./actionTypes";

export const login = loginName => dispatch => {
  dispatch({
    type: actionTypes.LOGIN_NAME,
    payload: {
      loginName
    }
  });
};
