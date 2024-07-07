import React, {CSSProperties} from "react";
import Link from "next/link";
import Image from "next/image";

import "@styles/NavBar.css";

import SendMailLogo from "@icons/send-mail.svg";
import LinkedinLogo from "@icons/linkedin.svg";
import XLogo from "@icons/x-logo.svg";
import GithubLogo from "@icons/github-logo.svg";

function NavBar() {
  const elementsContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const titleStyle = {
    color: "rgb(245, 245, 247)",
    fontFamily: "var(--font-raleway)",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    cursor: "pointer",
  };
  return (
      <div className="top-bar-elements-container" style={elementsContainerStyle}>
        <Link href="/">
          <h1 className="top-bar-title" style={titleStyle}>SUDIP HALDER</h1>
        </Link>
        <SocialLinks />
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
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div className="links-container" style={containerStyle}>
      <Link href="/mail">
        <Image
          src={SendMailLogo}
          width={30}
          height={30}
          alt="button to send mail to sudip halder"
          style={iconStyle}
        />
      </Link>
      <Link href="https://linkedin.com/in/sudiphalder" target="_blank">
        <Image
          src={LinkedinLogo}
          width={30}
          height={30}
          alt="button to visit sudip halder's linkedin profile"
          style={iconStyle}
        />
      </Link>
      <Link href="https://x.com/sudiphl" target="_blank">
        <Image
          src={XLogo}
          width={30}
          height={30}
          alt="button to visit sudip halder's twitter profile"
          style={iconStyle}
        />
      </Link>
      <Link href="https://github.com/sudipme" target="_blank">
        <Image
          src={GithubLogo}
          width={30}
          height={30}
          alt="button to visit sudip halder's github profile"
          style={iconStyle}
        />
      </Link>
    </div>
  );
}

export default NavBar;
