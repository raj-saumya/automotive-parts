import React from "react";
import styled from "styled-components";
import Icon from "../assets/icon-search.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Input>
        <IconSearch src={Icon} alt="icon-search" />
      </Input>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background: #cc0033;
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 40px;
  width: 40px;
  background: #303030;
  border-radius: 4px;
`;

const Input = styled.div`
  max-width: 480px;
  border: none;
  border-radius: 4px;
  background: #a00028;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: flex-end;

  @media (max-width: 640px) {
    max-width: 360px;
  }

  @media (max-width: 480px) {
    max-width: 240px;
  }
`;

const IconSearch = styled.img`
  height: 24px;
  width: 24px;
`;

export default Header;
