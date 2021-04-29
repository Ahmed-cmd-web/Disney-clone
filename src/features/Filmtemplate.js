/** @format */

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { info } from "./reducer";

function Filmtemplate() {
  const filminfo = useSelector(info);
  console.log(filminfo.currentlyviewed);

  return (
    <Container>
      <Img
        src={filminfo.currentlyviewed[0]?.backgroundImg}
        alt={filminfo.currentlyviewed[0]?.title}
      />
      <Content>
        <img
          src={filminfo.currentlyviewed[0]?.titleImg}
          alt={filminfo.currentlyviewed[0]?.title}
        />
        <Content2>
          <button style={{ flex: "0.2" }}>
            <img src="/images/play-icon-black.png" alt="" />
            PLAY
          </button>{" "}
          <button className="trailer">
            <img src="/images/play-icon-white.png" alt="" />
            TRAILER
          </button>
          <button className="add">
            {" "}
            <img src="/images/watchlist-icon (1).svg" alt="" />
          </button>
          <button className="group">
            {" "}
            <img src="/images/group-icon.png" alt="" />
          </button>
        </Content2>
        <span>{filminfo.currentlyviewed[0]?.subTitle}</span>
        <h4>{filminfo.currentlyviewed[0]?.description}</h4>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
const Content2 = styled.div`
  display: flex;

  width: 60%;

  button.trailer {
    flex: 0.3;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    &:hover {
      background: rgb(198, 198, 198);
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    height: 56px;
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 1.8px;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    &:hover {
      background: rgb(198, 198, 198);
    }
  }
  button.group,
  button.add {
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    align-self:center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    img {
      width: auto;
      height: 30px;
      font-weight: normal;
    }
  }
`;
const Content = styled.div`
  h4 {
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249, 249, 249);
    flex-wrap: wrap;
    width: 75%;
    margin: 0;
    font-weight: normal;
  }

  position: absolute;
  top: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0px calc(3.5vw + 5px);
  width: 100%;
  height: 90%;
  margin: 0px auto;

  img {
    width: 40%;
    object-fit: scale-down;
  }
`;
const Img = styled.img`
  width: 100%;
  opacity: 0.8;
  height: 100%;
  z-index: -99;
`;

export default Filmtemplate;
