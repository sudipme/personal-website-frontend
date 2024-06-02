import React from "react";

function Footer() {
  const footerContainerStyle = {
    width: "100vw",
    height: "50px",
    backgroundColor: "#323232",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid rgb(66, 66, 69)",
  };
  const contentStyle = {
    color: "#f5f5f7",
    fontFamily: "Montserrat",
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
