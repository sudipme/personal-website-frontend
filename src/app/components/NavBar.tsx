'use client';
import React, {CSSProperties, useState, useEffect} from "react";
import Link from "next/link";

import "@styles/NavBar.css";

import SendMailLogo from "@icons/send-mail.svg";
import LinkedinLogo from "@icons/linkedin.svg";
import XLogo from "@icons/x-logo.svg";
import GithubLogo from "@icons/github-logo.svg";

function NavBar() {
  const [topbarPosition, setTopbarPosition] = useState("0");
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollY = window.scrollY;
      if (currentScrollY < 0) {
        currentScrollY = 0;
      }
      if (document.documentElement.scrollHeight === window.innerHeight) {
        setTopbarPosition("0");
      } else if (currentScrollY >= document.documentElement.scrollHeight - window.innerHeight) {
        setTopbarPosition("-60px");
      } else {
        setTopbarPosition(currentScrollY > lastScrollY ? "-60px" : "0");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const containerStyle: CSSProperties = {
    position: "fixed",
    top: topbarPosition,
    width: "100vw",
    height: "60px",
    padding: "0px",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "top 0.5s ease-in-out",
    overflow: "hidden",
    borderRadius: "0 0 10px 10px",
  };

  const elementsContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const titleStyle = {
    color: "rgb(245, 245, 247)",
    fontFamily: "Sohne, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    cursor: "pointer",
  };
  return (
    <div id="top-bar-container" style={containerStyle}>
      <div id="top-bar-elements-container" style={elementsContainerStyle}>
        <Link href="/">
        <h1
          id="top-bar-title"
          style={titleStyle}
        >
          Sudip Halder
        </h1>
        </Link>
        <SocialLinks />
      </div>
    </div>
  );
}

function SocialLinks() {
  const containerStyle = {
    height: "60px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const iconStyle = {
    height: "30px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div id="links-container" style={containerStyle}>
      <Link href="/mail">
        <img
          src={SendMailLogo.src}
          style={iconStyle}
          alt="button to send mail to sudip halder"
        ></img>
      </Link>
      <Link href="https://linkedin.com/in/sudiphalder" target="_blank">
        <img
          src={LinkedinLogo.src}
          style={iconStyle}
          alt="button to visit sudip halder's linkedin profile"
        ></img>
      </Link>
      <Link href="https://x.com/sudiphl" target="_blank">
        <img
          src={XLogo.src}
          style={iconStyle}
          alt="button to visit sudip halder's twitter profile"
        ></img>
      </Link>
      <Link href="https://github.com/sudipme" target="_blank">
        <img
          src={GithubLogo.src}
          style={iconStyle}
          alt="button to visit sudip halder's github profile"
        ></img>
      </Link>
    </div>
  );
}

export default NavBar;
