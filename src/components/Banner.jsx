import React from "react";
import styled from "styled-components";
import BannerImg from "../assets/banner.jpg";
import ProductImage from "../assets/bottle.png";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <h1>Save 10%</h1>
        <h3>Ipsum delicata sed ex.</h3>
        <Label>
          Lorem ipsum dolor sit amet, ea est noster accumsan, vim elit aeque an.
          Eu duo quod elit, posse facer minimum pri eu, ea sit viris ceteros. Ea
          has consul omnesque, an vel reque graeco. Eum ne mundi nobis quando,
          an atqui dolor per. Ut modo elit malis sea. Nibh consetetur mei ea.
        </Label>
      </BannerContent>
      <ProductIcon src={ProductImage} alt="product-icon" />
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  height: 400px;
  padding: 32px;
  background-image: url(${BannerImg});
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const BannerContent = styled.div`
  width: 50%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 16px;
`;

const ProductIcon = styled.img`
  object-fit: contain;
  z-index: 2;
`;

export default Banner;
