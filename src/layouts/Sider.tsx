import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderLayout = () => {
  return (
    <Sider className="sider">
      <Menu
        mode="inline"
        defaultOpenKeys={['sub-admin']}
        defaultSelectedKeys={['account']}
        className="sider__nav"
      >
        <SubMenu
          key="sub-admin"
          title="Admin"
          icon={<UserOutlined />}
        >
          <Menu.Item key="account">Accounts</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SiderLayout;
