import React from "react";
import "../css/LoadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div className="loading-animation-wrapper">
      <div className="loading-animation">
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
