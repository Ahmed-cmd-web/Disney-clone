/** @format */

import React from "react";
import { CContainer, Img } from "./Category";
import { useDispatch } from "react-redux";
import { view } from "./reducer";
import { useHistory } from "react-router-dom";
import LazyLoad from "react-lazyload";
function Films(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const filminfo = () => {
    dispatch(view(props.info));
    localStorage.setItem("info", JSON.stringify(props.info));
    history.push("/filminfo");
  };

  return (
    <CContainer onClick={filminfo}>
      <LazyLoad height={"100%"} preventLoading={true}>
        <Img
          src={props.info.cardImg}
          alt={props.info.title}
        />
      </LazyLoad>
    </CContainer>
  );
}

export default Films;
