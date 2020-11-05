import React from 'react';
import { Layout, Row, Col, Breadcrumb } from 'antd';

interface Props {
  children: React.ReactNode;
  headerFunc: React.ReactNode;
}

const { Content } = Layout;

class MainLayout extends React.PureComponent<Props> {
  render() {
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
            {this.props.headerFunc}
          </Col>
        </Row>
        <Content className="main__content">
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default MainLayout;
