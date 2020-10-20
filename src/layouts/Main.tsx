import React from 'react';
import { Layout, Row, Col, Breadcrumb, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

interface Props {
  children: React.ReactNode
}

const { Content } = Layout;

const MainLayout: React.FC<Props> = (props) => {
  return (
    <Layout className="main--right">
      <Row className="main__header">
        <Col flex="auto" className="main__header__breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Accounts</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col flex="auto" className="main__header__func">
          <Button
            type="primary"
            shape="circle"
            icon={<UserAddOutlined />}
          />
        </Col>
      </Row>
      <Content className="main__content">
        {props.children}
      </Content>
    </Layout>
  )
}

export default MainLayout;
