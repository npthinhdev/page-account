import React from 'react';
import { Layout, Row, Col, Space, Breadcrumb, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

interface Props {
  children: React.ReactNode
}

const { Content } = Layout;

const MainLayout: React.FC<Props> = (props) => {
  return (
    <Layout className="side-main">
      <Row className="side-main--header">
        <Col flex="auto">
          <Breadcrumb>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Accounts</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Space align="center">
          <Col flex="auto">
            <Button
              type="primary"
              shape="circle"
              icon={<UserAddOutlined />}
            />
          </Col>
        </Space>
      </Row>
      <Content
        className="side-main--content"
      >
        {props.children}
      </Content>
    </Layout>
  )
}

export default MainLayout;
