/** @format */

import React from "react";
import styled from "styled-components";
import Sliderf from "./Slider";
import Category from "./Category";
import { useSelector } from "react-redux";
import { info } from "./reducer";
import Films from './Films'
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
  var select = useSelector(info);
  return (
    <Container>
      <Sliderf />
      <Content>
        {catgs.map((i) => (
          <Category vid={i.vid} key={i.img} img={i.img} />
        ))}
      </Content>
      <Subtitle>Recommended For You</Subtitle>
      <Filmrow >
        {select.recommend.map((i) => (
          <Films key={i.title} info={i} />
        ))}
      </Filmrow>{" "}
      <Subtitle>New to Disney+</Subtitle>
      <Filmrow >
        {select.new.map((i) => (
          <Films key={i.title} info={i} />
        ))}
      </Filmrow>
      <Subtitle>Originals</Subtitle>
      <Filmrow >
        {select.originals.map((i) => (
          <Films key={i.title} info={i} />
        ))}
      </Filmrow>{" "}
      <Subtitle>Trending</Subtitle>
      <Filmrow >
        {select.trending.map((i) => (
          <Films key={i.title} info={i} />
        ))}
      </Filmrow>
    </Container>
  );
}

const Container = styled.div`
  background: url("/images/home-background.png");
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 30px 0px 30px;
  justify-content: space-between;
  background-size: cover;
  z-index:1;
`;
const Content = styled.div`
  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    justify-items: stretch;
    justify-content: end;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 801px) {
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 25px;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
const Subtitle = styled.span`
  align-self:flex-start;
  font-weight:bold;
`

const Filmrow = styled.div`
  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    
    justify-content: end;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 801px) {
    display: inline-grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 25px;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export default Body;
