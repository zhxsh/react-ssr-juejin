import React from 'react';
import { Button, Menu } from 'antd';
// import { link as Link, router as Router } from 'next';
import Link from 'next/link';
import Router from 'next/router';

import '../../less/header.less';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  componentDidMount() {
    // const { getTimeline } = this.props;
    // getTimeline();

    document.getElementById('menu').addEventListener('click', this.show, false);
    document.addEventListener('click', this.listener, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.listener);
  }

  change = (item, event) => {
    const { changeNav } = this.props;
    changeNav(item, this.props);
    Router.push('/' + (item.key === '/' ? '' : item.key));
  };

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

  test = () => {
    console.log('test');
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
            <i className="triangle" />
          </div>
        </div>

        <ul className={show ? 'block navs' : 'navs'}>
          {navs.map((item) => {
            return (
              // <Link href="/activities" key={item.id}>
              <li
                key={item.id}
                onClick={(e) => this.change(item, e)}
                className={item.key === curNav.key ? 'active' : ''}>
                {item.value}
              </li>
              // </Link>
            );
          })}
        </ul>
        <div className="user">
          <span onClick={this.test}>登录</span>
          <span className="circle">·</span>
          <span>注册</span>
        </div>
      </div>
    );
  }
}

export default Header;
// export default withRouter(Header);
