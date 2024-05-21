import React from "react";

function Footer() {
  const footerContainerStyle = {
    width: "100vw",
    height: "50px",
    backgroundColor: "#252A30",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const contentStyle = {
    color: "#fff",
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };
  return (
    <div id="footer-container" style={footerContainerStyle}>
      <p style={contentStyle}>© Copyright 2024 Sudip Halder </p>
    </div>
  );
}

export default Footer;
