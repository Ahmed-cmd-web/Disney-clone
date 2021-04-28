/** @format */

import React from "react";
import styled from "styled-components";

function Category(props) {
  return (
    <CContainer>
      <Img src={props.img} alt="" />

      <Video
        autoPlay
        muted
        loop
        src={props.vid}
        type="video/mp4"
      ></Video>
    </CContainer>
  );
}

const CContainer = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    border: 3px solid white;
    transform: scale(1.05);
    Video {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  z-index: 99;
  width: 100%;

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
