import React from 'react';
import { Layout } from 'antd';

import HeaderLayout from './Header';
import SiderLayout from './Sider';
import MainLayout from './Main';

interface Props {
  children: React.ReactNode
}

const BaseLayout: React.FC<Props> = (props) => {
  return (
    <Layout>
      <HeaderLayout />
      <Layout className="main">
        <SiderLayout />
        <MainLayout>{props.children}</MainLayout>
      </Layout>
    </Layout>
  )
}

export default BaseLayout;
