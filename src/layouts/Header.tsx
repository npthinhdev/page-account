import React from 'react';
import { Layout, Row, Col, Button, Input } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Search } = Input;

const HeaderLayout = () => {
  return (
    <Header className="header">
      <Row>
        <Col flex="auto">
          <div className="header--brand">
            <Link to="/"><h1>Pikachu</h1></Link>
          </div>
        </Col>
        <Col>
          <Row style={{ justifyContent: "flex-end" }}>
            <Button
              type="link"
              danger
              id="btn-logout"
            >
              Logout
          </Button>
          </Row>
          <Row>
            <Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              id="input-search"
            />
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderLayout;
