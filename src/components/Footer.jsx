import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <h4>Elite Developer.</h4>
        <Label>About</Label>
        <div className="h-x"></div>
        <Label>Site Map</Label>
        <div className="h-x"></div>
        <Label>Twitter</Label>
        <div className="h-x"></div>
        <Label>Facebook</Label>
        <div className="h-x"></div>
        <Label>G+</Label>
      </FooterContent>
      <FooterEnd>
        <Span>© Copyright since my birth. 😋</Span>
      </FooterEnd>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background: #272727;
  height: 296px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const FooterContent = styled.div`
  align-self: flex-end;
  position: relative;
  right: 64px;
  top: 16px;

  @media (max-width: 480px) {
    align-self: center;
    right: 0;
  }
`;

const FooterEnd = styled.div`
  margin-bottom: 0;
  margin-top: auto;
  text-align: center;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Span = styled.label`
  font-size: 12px;
`;

export default Footer;
