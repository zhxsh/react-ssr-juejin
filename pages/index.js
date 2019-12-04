import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Button } from 'antd';
import axios from 'axios';
import api from '../src/Api/api';

import '../src/less/index.css';
import { changeWelcome, fetchList } from '../src/actions/homeAction';
import { changeNav } from '../src/actions/HeaderAction';
import HeaderContainer from '../src/containers/HeaderContainer';
import Content from '../src/pages/home/Content';

class index extends Component {
  static async getInitialProps({ reduxStore, req }) {
    const res = await axios.get(api.timeline);
    console.log('zz', {
      articleList: res.data.d,
    });
    reduxStore.dispatch(fetchList(res.data.d));
    return {};
  }
  componentDidMount() {
    const { changeNav, navs, curNav, show } = this.props;
    console.log(this.props);
    if (curNav.id !== navs[0].id) changeNav(navs[0], this.props);
  }
  changeProps = () => {
    this.props.changeWelcome('我是修改后的 欢迎使用 next.js');
  };

  render() {
    const { welcome, loginName } = this.props;
    console.log('index', this.props);
    return (
      <div className="wrap" id="root">
        <Head>
          <title>掘金 by next.js</title>
          <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        </Head>

        <HeaderContainer />

        <Content {...this.props} />
      </div>
    );
  }
}

const mapStateToPros = (state) => {
  return {
    ...state.loginReducer,
    ...state.headerReducer,
    ...state.articlesReducer,
  };
};

const mapDispatchToProps = { changeWelcome, changeNav };

export default connect(mapStateToPros, mapDispatchToProps)(index);
