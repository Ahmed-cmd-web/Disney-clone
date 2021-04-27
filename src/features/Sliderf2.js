/** @format */

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container } from "./Slider";
import styled from "styled-components";

function Sliderf2() {
  var settings = {};
  const images = [
    "/images/slider-badging.jpg",
    "/images/slider-badag.jpg",
    "/images/slider-scales.jpg",
    "/images/slider-scale.jpg",
  ];
  return (
    <Container>
      {/* <Carousel
        autoPlay={true}
        infiniteLoop={true}
        renderArrowPrev={ handler=() => {
          return none, (hasPrev = true), (label = "");
        }}
        stopOnHover={true}
        interval={3000}
      >
        {images.map((i) => (
          <Img src={i} alt="" className="sliderimg" />
        ))}
          </Carousel>
          <button onClick={handler}>prev</button> */}
    </Container>
  );
}
const Img = styled.img`
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
export default Sliderf2;
