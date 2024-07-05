import "../css/TopBar.css";
import SendMailLogo from "../assets/icons/send-mail.svg";
import LinkedinLogo from "../assets/icons/linkedin.svg";
import XLogo from "../assets/icons/x-logo.svg";
import GithubLogo from "../assets/icons/github-logo.svg";
import { BaseUrl } from "../config.js";
import {useState, useEffect} from "react";

function TopBar() {
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

  const containerStyle = {
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
    overflow: "hidden"

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
        <h1
          id="top-bar-title"
          style={titleStyle}
          onClick={() => (window.location.href = BaseUrl)}
        >
          Sudip Halder
        </h1>
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
      <img
        src={SendMailLogo}
        style={iconStyle}
        onClick={() => (window.location.href = "/mail")}
        alt="button to send mail to sudip halder"
      ></img>
      <img
        src={LinkedinLogo}
        style={iconStyle}
        onClick={() =>
          window.open("https://linkedin.com/in/sudiphalder", "_blank")
        }
        alt="button to visit sudip halder's linkedin profile"
      ></img>
      <img
        src={XLogo}
        style={iconStyle}
        onClick={() => window.open("https://x.com/sudiphl", "_blank")}
        alt="button to visit sudip halder's twitter profile"
      ></img>
      <img
        src={GithubLogo}
        style={iconStyle}
        onClick={() => window.open("https://github.com/sudipme", "_blank")}
        alt="button to visit sudip halder's github profile"
      ></img>
    </div>
  );
}

export default TopBar;
