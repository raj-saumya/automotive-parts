import React from "react";
import styled from "styled-components";

const ColorPanel = () => {
  return (
    <PanelWrapper>
      <Card color="#35D3B4">
        <label>#35D3B4</label>
      </Card>
      <Card color="#1B2191">
        <label>#35D3B4</label>
      </Card>
      <Card color="#057BAD">
        <label>#35D3B4</label>
      </Card>
    </PanelWrapper>
  );
};

const PanelWrapper = styled.div`
  background: #fff;
  padding: 16px;
  display: flex;

  @media (min-width: 1024px) {
    height: 132px;
  }

  @media (max-width: 480px) {
    padding-top: 80px;
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 120px;
  margin: 16px;
  background: ${({ color }) => color};
  border: 8px solid #fff;
  border-radius: 4px;
  box-shadow: 0 8px 15px -4px #0000006b;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    position: relative;
    top: -64px;
  }

  @media (max-width: 480px) {
    width: 90%;
    border: none;
    height: 60px;
    label {
      display: none;
    }
  }
`;

export default ColorPanel;
