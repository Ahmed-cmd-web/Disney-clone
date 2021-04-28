/** @format */

import React from "react";
import styled from "styled-components";
import Sliderf from "./Slider";
import Category from "./Category";
function Body() {
  const catgs = [
    {
      img: "/images/viewers-disney.png",
      vid: "/images/1564674844-disney.mp4",
    },
    {
      img: "/images/viewers-pixar.png",
      vid: "/images/1564676714-pixar.mp4",
    },
    {
      img: "/images/viewers-marvel.png",
      vid: "/images/1564676115-marvel (1).mp4",
    },
    {
      img: "/images/viewers-starwars.png",
      vid: "/images/1608229455-star-wars.mp4",
    },
    {
      img: "/images/viewers-national.png",
      vid: "/images/1564676296-national-geographic.mp4",
    },
  ];

  return (
    <Container>
      <Sliderf />
      <Content>
        {catgs.map((i) => (
          <Category vid={i.vid} img={i.img} />
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background: url("/images/home-background.png");
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px 0px 30px;
  justify-content: space-between;
  background-size: cover;
`;
const Content = styled.div`
  
  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    row-gap: 20px;
    justify-content: center;
    margin-top: 30px;
  }
  @media only screen and (min-width: 801px) {
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 25px;
    justify-content: center;
  }
`;

export default Body;
