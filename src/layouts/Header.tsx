import React from 'react';
import { Layout, Row, Col, Button, Input, Image } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Search } = Input;

const HeaderLayout = () => {
  return (
    <Header className="header">
      <Row>
        <Col flex="auto" className="header__brand">
          <Link to="/" className="header__brand--link"><img src="/pikachu.png" className="header__brand--img" />Pikachu</Link>
        </Col>
        <Col>
          <Row className="header--right--top">
            <Button
              type="link"
              danger
              className="header__logout"
            >
              Logout
          </Button>
          </Row>
          <Row className="header--right--bottom">
            <Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              className="header__search"
            />
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderLayout;
