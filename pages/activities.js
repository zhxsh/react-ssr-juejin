import React, { Component } from 'react';

import HeaderContainer from '../src/containers/HeaderContainer';
import Content from '../src/pages/home/Content';

export default class activities extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div>动态</div>
      </div>
    );
  }
}
