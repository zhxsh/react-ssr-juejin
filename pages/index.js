import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";
import { Button } from 'antd';

import "./index.css";
import { changeWelcome } from "../src/actions/homeAction";

// export default
class index extends Component {
  // static getInitialPros({ reduxStore, req }) {

  // }
  changeProps = () => {
    this.props.changeWelcome("我是修改后的 欢迎使用 next.js");
  };

  render() {
    const { welcome, loginName } = this.props;
    return (
      <div className="wrap" id="root">
        <Head>
          <title>next.js demo</title>
          <meta
            name="viewport"
            content="initial-scale=1.0,width=device-width"
          />
        </Head>
        <div style={{ overflow: "auto" }}>
          <span className="loginName">{loginName}</span>
        </div>
        <h1>home</h1>
        <Link href="/home">
          <h4>to /home</h4>
        </Link>

        <h1>路由转到 /login</h1>
        <Link href="/login">
          <h4>to /login</h4>
        </Link>

        <h1
          onClick={this.changeProps}
          style={{ marginTop: 60, cursor: "pointer" }}>
          修改 reducer 欢迎语
        </h1>

        <h2>{welcome}</h2>

        <Button>asd</Button>
      </div>
    );
  }
}

const mapStateToPros = state => {
  return { ...state.homeReducer, ...state.loginReducer };
};

const mapDispatchToProps = { changeWelcome };

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(index);
