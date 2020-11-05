import React from 'react';
import { Layout } from 'antd';

import HeaderLayout from './Header';
import SiderLayout from './Sider';
import MainLayout from './Main';

interface Props {
  children: React.ReactNode;
  headerFunc: React.ReactNode;
}

class BaseLayout extends React.PureComponent<Props> {
  render() {
    return (
      <Layout>
        <HeaderLayout />
        <Layout className="main">
          <SiderLayout />
          <MainLayout headerFunc={this.props.headerFunc}>{this.props.children}</MainLayout>
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout;
