import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const menuItems = (Menu.MenuProps = [
  {
    label: <Link href="/">노드버드</Link>,
    key: "nodebird",
  },
  {
    label: <Link href="/profile">프로필</Link>,
    key: "profile",
  },
  {
    label: <SearchInput enterButton />,
    key: "search",
  },
  {
    label: <Link href="/signup">회원가입</Link>,
    key: "signup",
  },
]);

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Menu mode="horizontal" items={menuItems} />
      <Row gutter={8}>
        {/* gutter = 컬럼사이의 간격 */}
        {/* xs=mobile sm=tab md=small desktop  */}
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/doradora523"
            target="_blank"
            rel="noreferer noopener"
          >
            Made by Sukyung
          </a>
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
