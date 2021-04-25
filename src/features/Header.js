/** @format */
import { auth, google } from "./firebase";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userinfo } from "./reducer";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const signinwithgoogle = () =>
    auth
      .signInWithPopup(google)
      .then((i) => {
        dispatch(userinfo(i.user.photoURL));
        history.push("/home");
      })
      .catch((e) => console.log(e.message));

  return (
    <Container>
      <Left>
        {" "}
        <Logo src="images/logo.svg" alt="" />
        <Headeropt>
          {" "}
          <Icon src="/images/home-icon.svg" alt="" /> HOME
        </Headeropt>
        <Headeropt>
          {" "}
          <Icon src="/images/search-icon.svg" alt="" /> SEARCH
        </Headeropt>
        <Headeropt>
          {" "}
          <Icon src="/images/watchlist-icon.svg" alt="" />
          WATCHLIST
        </Headeropt>
        <Headeropt>
          <Icon src="/images/original-icon.svg" alt="" />
          ORIGINALS
        </Headeropt>
        <Headeropt>
          {" "}
          <Icon src="/images/movie-icon.svg" alt="" />
          MOVIES
        </Headeropt>
        <Headeropt>
          <Icon src="/images/series-icon.svg" alt="" />
          SERIES
        </Headeropt>
      </Left>
      <Right>
        {" "}
        <Loginbutton onClick={signinwithgoogle}>LOGIN</Loginbutton>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
`;
const Logo = styled.img`
  object-fit: scale-down;
  height: 45px;
  width: auto;
  cursor: pointer;
`;
const Loginbutton = styled.button`
  background-color: black;
  color: #f9f9f9;
  border-color: #f9f9f9;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  border-width: 1px;
  height: 40px;
  padding: 15px;
  width: auto;
  font-size: 18px;
  transition: all 0.4s ease;
  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;
const Headeropt = styled.span`
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  justify-content: space-around;
  border-bottom: 1px solid white;
  transition: width 0.5s ease;

  &:hover {
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.7;
  font-size: 13px;
  cursor: pointer;
`;
const Icon = styled.img`
  object-fit: scale-down;
  height: 20px;
  padding-right: 10px;
`;
const Right = styled.div``;
export default Header;
