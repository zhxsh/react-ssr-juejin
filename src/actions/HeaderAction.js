import * as types from './ActionTypes';

export const changeNav = (curNav, props) => {
  // console.log(curNav.key);
  // location.pathname = curNav.key;
  // props.history.push('/'+item.key);

  return (dispatch) => {
    console.error('zxs dis');
    dispatch({
      type: types.CHANGE_NAV,
      payload: {
        curNav,
        show: false,
      },
    });
  };
};

export const showMenu = (show) => {
  return {
    type: types.SHOW_MENU,
    payload: {
      show: !show,
    },
  };

  return (dispatch) => {
    console.error('zxs show');
    dispatch({
      type: types.SHOW_MENU,
      payload: {
        show: !show,
      },
    });
  };
};
