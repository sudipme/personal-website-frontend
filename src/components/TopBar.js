import "../css/TopBar.css";
import SendMailLogo from "../assets/icons/send-mail.svg";
import LinkedinLogo from "../assets/icons/linkedin.svg";
import XLogo from "../assets/icons/x-logo.svg";
import GithubLogo from "../assets/icons/github-logo.svg";
import { BaseUrl } from "../config.js";

function TopBar() {
  const containerStyle = {
    width: "100vw",
    padding: "0px",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#222",
  };

  const elementsContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const titleStyle = {
    color: "#fff",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    cursor: "pointer",
  };
  const topLineStyle = {
    height: "2px",
    background: "#888", //#0077B5
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
      {/* <div id="top-line" style={topLineStyle}></div> */}
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
      <img
        src={SendMailLogo}
        style={iconStyle}
        onClick={() => (window.location.href = "/mail")}
        alt="button to send mail to sudip halder"
      ></img>
    </div>
  );
}

export default TopBar;
