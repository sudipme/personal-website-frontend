import React, {CSSProperties} from "react";

function Footer() {
  const footerContainerStyle: CSSProperties = {
    width: "100vw",
    height: "32px",
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const contentStyle: CSSProperties = {
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
