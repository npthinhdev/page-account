import React from 'react';
import { Layout } from 'antd';

import HeaderLayout from './Header';
import SiderLayout from './Sider';
import MainLayout from './Main';

const BaseLayout = () => {
  return (
    <Layout>
      <HeaderLayout />
      <Layout className="main-wrapper">
        <SiderLayout />
        <MainLayout />
      </Layout>
    </Layout>
  )
}

export default BaseLayout;
