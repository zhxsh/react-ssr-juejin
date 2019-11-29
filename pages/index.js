import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Button } from 'antd';
import axios from 'axios';
import api from '../src/Api/api';

import '../src/less/index.css';
import { changeWelcome, fetchList } from '../src/actions/homeAction';
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
        {/* <div style={{ overflow: "auto" }}>
          <span className="loginName">{loginName}</span>
        </div>

        <h1>路由转到 /login</h1>
        <Link href="/login">
          <h4>to /login</h4>
        </Link>

        <h1
          onClick={this.changeProps}
          style={{ marginTop: 60, cursor: "pointer" }}>
          修改 reducer 欢迎语
        </h1>

        <h2>{welcome}</h2> */}

        <HeaderContainer />

        <Content {...this.props} />
      </div>
    );
  }
}

const mapStateToPros = (state) => {
  return {
    ...state.homeReducer,
    ...state.loginReducer,
    ...state.articlesReducer,
  };
};

const mapDispatchToProps = { changeWelcome };

export default connect(mapStateToPros, mapDispatchToProps)(index);
