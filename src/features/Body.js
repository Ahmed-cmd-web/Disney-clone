/** @format */

import React from "react";
import styled from "styled-components";
import Sliderf from "./Slider";

function Body() {
  return (
    <Container>
          <Sliderf/>
          
    </Container>
  );
}

const Container = styled.div`
  background: url("/images/home-background.png");
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-size: cover;
`;

export default Body;
