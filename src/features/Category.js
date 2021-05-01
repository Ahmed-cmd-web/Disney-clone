/** @format */

import React from "react";
import styled from "styled-components";

function Category(props) {
  return (
    <CContainer>
      <Img src={props.img} alt="" />
      <Video autoPlay="autoplay" loop="loop" muted playsInline>
        <source src={props.vid} type="video/mp4" />
      </Video>
    </CContainer>
  );
}

export const CContainer = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  display: flex;
  justify-content: center;
  position: relative;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    border: 3px solid rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
    Video {
      opacity: 1;
    }
  }
`;

export const Img = styled.img`
  z-index: 9;
  width: 100%;
  border-radius: 4%;
  left: 0px;
  right: 0px;
`;
const Video = styled.video`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  opacity: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 7px;
`;

export default Category;
