/** @format */
import { auth, google } from "./firebase";
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { info, userinfo } from "./reducer";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const img = useSelector(info).user;
  const signinwithgoogle = () =>
    auth
      .signInWithPopup(google)
      .then((i) => {
        dispatch(userinfo(i.user.photoURL));
        history.push("/home");
      })
      .catch((e) => console.log(e.message));
  const signout = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };
  return (
    <Container>
      <Left>
        {" "}
        <Logo src="images/logo.svg" onClick={() => history.push("/")} alt="" />
        <Headeropt
          style={img.length > 0 ? { display: "flex" } : { display: "none" }}
          onClick={() => history.push("/home")}
        >
          {" "}
          <Icon src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </Headeropt>
        <Headeropt
          style={img.length > 0 ? { display: "flex" } : { display: "none" }}
        >
          {" "}
          <Icon src="/images/search-icon.svg" alt="" /> <span>SEARCH</span>
        </Headeropt>
        <Headeropt
          style={img.length > 0 ? { display: "flex" } : { display: "none" }}
        >
          {" "}
          <Icon src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </Headeropt>
        <Headeropt
          style={img.length > 0 ? { display: "flex" } : { display: "none" }}
        >
          <Icon src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </Headeropt>
        <Headeropt
          style={img.length > 0 ? { display: "flex" } : { display: "none" }}
        >
          {" "}
          <Icon src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </Headeropt>
        <Headeropt
          style={img.length > 0 ? { display: "flex" } : { display: "none" }}
        >
          <Icon src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </Headeropt>
      </Left>
      <Right>
        <Userimg
          src={img}
          alt=""
          style={img.length > 0 ? { display: "flex" } : { display: "none" }}
        />
        <span
          style={img.length > 0 ? { display: "flex" } : { display: "none" }}
          onClick={signout}
        >
          Sign out
        </span>

        <Loginbutton
          onClick={signinwithgoogle}
          style={img.length > 0 ? { display: "none" } : { display: "flex" }}
        >
          LOGIN
        </Loginbutton>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 10vh;
  width: 100%;
  position: sticky;
  z-index: 90009;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
`;
const Userimg = styled.img`
  width: 45px;
  border-radius: 25px;
  cursor: pointer;
  &:hover ~ span {
    opacity: 1;
    visibility: visible;
  }
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
  align-items: center;
  letter-spacing: 1px;
  justify-content: space-around;
  @media only screen and (max-width: 800px) {
    display: none !important ;
  }

  span {
    position: relative;
    &:before {
      background-color: white;
      display: flex;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
      border-radius: 4px;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1;
    }
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
const Right = styled.div`
  display: flex;
  position: relative;
  span {
    transition: all 0.5s ease;
    border: 1px solid rgba(151, 151, 151, 0.34);
    position: absolute;
    font-size: 14px;
    top: 45px;
    right: 5px;
    letter-spacing: 3px;
    width: 100px;
    padding: 5px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    &:hover {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default Header;
