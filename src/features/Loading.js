/** @format */

import React from "react";
import Lottie from "lottie-react/build";
import loading from "../animations/loading.json";
import LoadingOverlay from "react-loading-overlay-ts";
const Loading = ({ visible, children }) => {
  return (
    <LoadingOverlay
      active={visible}
      spinner={<Lottie animationData={loading}  />}
    >
      {children}
    </LoadingOverlay>
  );
};

export default Loading;
