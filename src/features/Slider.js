/** @format */

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Sliderf() {
  const images = [
    "/images/slider-badging.jpg",
    "/images/slider-badag.jpg",
    "/images/slider-scales.jpg",
    "/images/slider-scale.jpg",
  ];

  return (
    <Container>
      <AliceCarousel
        autoPlayInterval={3000}
        autoPlayStrategy="default"
        infinite={true}
        controlsStrategy="alternate"
        mouseTracking={true}
        autoPlay={true}
      >
        {images.map((i) => (
          <Img src={i} alt="" className="sliderimg" />
        ))}
      </AliceCarousel>
    </Container>
  );
}

export const Container = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 95px;
    width: auto;
    height: 0px;
    font-size: 30px;
    border: none;
    background-color: gainsboro;
  }

  .alice-carousel__next-btn {
    right: 0;
  }
  .alice-carousel__prev-btn span,
  .alice-carousel__next-btn span {
    border: 1px solid black;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: auto;
  display: flex;
  margin-bottom: 5px;
  justify-content: flex-end;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  max-height: 280px;
  transition: border-width 0.3s ease;
  border: 1px transparent gainsboro;
  cursor: pointer;
  &:hover {
    border-radius: 4px;

    border: 4px solid gainsboro;
  }
`;

export default Sliderf;
