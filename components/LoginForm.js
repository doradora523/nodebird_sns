import React, { useCallback, useState, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

// const style = useMemo(() => ({ marginTop: 10 }), []);
// useMemo를 이용한 리렌더링 막는 방법

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          type="text"
          value={id}
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          type="password"
          onChange={onChangePassword}
          required
        />
      </div>
      {/* <ButtonWrapper style={style}> */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
