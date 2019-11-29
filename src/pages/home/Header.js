import React from 'react';
import { Button, Menu } from 'antd';
// import { Link,withRouter } from 'react-router-dom';

import '../../less/header.less';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     menus: ['首页','沸点','小册','开源库','活动'],
    //     show: false
    // }

    // this.showMenu = this.showMenu.bind(this);
    // this.change = this.change.bind(this);
  }
  componentDidMount() {
    const { getTimeline } = this.props;
    // getTimeline();

    document.addEventListener('click', this.listener);
    document.getElementById('menu').addEventListener('click', this.show);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.listener);
  }

  change(item) {
    const { changeNav } = this.props;
    this.props.history.push('/' + item.key);
    changeNav(item, this.props);
  }

  show = (event) => {
    event.stopPropagation();
    const {
      showMenu,
      header: { show },
    } = this.props;
    showMenu(show);
  };

  listener = () => {
    const {
      showMenu,
      header: { show },
    } = this.props;
    show && showMenu(show);
  };

  render() {
    // const { navs, curNav, show } = this.props.header;
    const {
      changeNav,
      showMenu,
      header: { navs, curNav, show },
    } = this.props;
    return (
      <div className="header">
        <div className="menu">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="juejin" />
          <div
            className="index"
            // onClick={this.show}
            id="menu">
            <span>{curNav.value}</span>
            <i className="triangle"></i>
            {/* {
                            this.state.show &&  */}
            <ul className={show ? 'block' : ''}>
              {navs.map((item) => (
                <li
                  key={item.id}
                  className={item.key === curNav.key ? 'active' : ''}
                  // onClick={() => changeNav(item)}
                  // onClick={() => this.change(item)}
                  onClick={this.change.bind(this, item)}>
                  {/* <Link to={'/'+item.key}> */}
                  {item.value}
                  {/* </Link> */}
                </li>
              ))}
            </ul>
            {/* } */}
          </div>
        </div>
        <div className="user">
          <span>登录</span>
          <span className="circle">·</span>
          <span>注册</span>
        </div>
      </div>
    );
  }
}

export default Header;
// export default withRouter(Header);
