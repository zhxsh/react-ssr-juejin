import { connect } from 'react-redux';

import { getTimeline } from '../actions/actions';
import { changeNav, showMenu } from '../actions/HeaderAction';
import Header from '../pages/home/Header';

const mapStateToProps = (state) => {
  return {
    header: state.headerReducer,
  };
};

// store.dispatch(changeNav(1))
// const mapDispatchToProps = dispatch => {
//     return {
//         changeNav: id => {
//             dispatch(changeNav(id))
//         },
//         // changeNav,
//         getTimeline: ()=>{
//             dispatch(getTimeline())
//         },
//         showMenu: show => {
//             dispatch(showMenu(show))
//         }
//     }
// }

const HeaderContainer = connect(
  mapStateToProps,
  // mapDispatchToProps,
  {
    changeNav,
    getTimeline,
    showMenu,
  },
)(Header);

export default HeaderContainer;
