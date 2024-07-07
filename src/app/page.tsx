import React, {CSSProperties} from "react";
import Link from "next/link";

import Updates from "./components/Updates";
import FeaturedProjects from "./components/FeaturedProjects";
import FeaturedBlogs from "./components/FeaturedBlogs";

import "@styles/HomePage.css";
import RightArrowIcon from "@public/icons/right-arrow-icon.svg";


function HomePage() {

    const homePageStyle: CSSProperties = {
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-around",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "rgb(8,8,8)",
    };
    const infoContainerStyle: CSSProperties = {
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "#000",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "28px",
    };
    return (
        <>
            <div
                id="home-page"
                style={homePageStyle}
            >
                <Spacer height="20px"/>
                <div></div>
                <AboutMe/>
                <Spacer height="20px"/>
                <div id="info-container" style={infoContainerStyle}>
                    <Updates/>
                    <Links/>
                </div>
                <Spacer height="20px"/>
                <FeaturedProjects/>
                <Spacer height="40px"/>
                <FeaturedBlogs/>
            </div>
        </>
    );
}

function AboutMe() {
    const paragraphStyle = {
        color: "#f5f5f7",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        lineHeight: "normal",
    };
    const firstLineStyle = {
        display: "block",
        lineHeight: "40px",
    };

    return (
        <div id="about-me-container">
            <p id="about-me" style={paragraphStyle}>
            <span style={firstLineStyle}>
            </span>
                Hello there! I'm Sudip.
                <br/>
                <br/>
                I'm currently pursuing an undergraduate degree in Computer Science at the Indian Institute of
                Information Technology, Sri City.
                <br/>
                <br/>
                One of my favorite aspects of being a computer science student is participating in weekly coding
                contests. These challenges allow me to apply my problem-solving skills, algorithmic thinking, and
                programming prowess to real-world scenarios.
                <br/>
                <br/>
                Machine learning is a domain that truly excites me. I am actively investing time and effort into
                understanding the intricacies of ML algorithms, techniques, and their practical applications.
            </p>
        </div>
    );
}

function Heading(props) {
    const headingContainerStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    };
    const headingStyle = {
        fontSize: "28px",
        color: "#f5f5f7",
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };
    const rightArrowIconStyle = {
        fontSize: "28px",
        fontWeight: "400",
        width: "20px",
    };
    return (
        <Link href={props.link}>
        <div
            style={headingContainerStyle}
        >
            <h1 style={headingStyle}>{props.title} &nbsp;</h1>
            <img
                src={RightArrowIcon.src}
                style={rightArrowIconStyle}
                alt="expand button"
            ></img>
        </div>
        </Link>
    );
}

function Spacer(props) {
    const spacerStyle = {
        height: props.height,
    };
    return <div id="spacer" style={spacerStyle}></div>;
}

function Links() {
    const listStyle: CSSProperties = {
        minWidth: "300px",
        padding: "0",
        listStyleType: "none",
        textAlign: "center",
    };
    const listTitleWrapperStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    };
    const listTitleStyle = {
        fontSize: "28px",
        color: "#f5f5f7",
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };
    const listItemStyle: CSSProperties = {
        width: "100%",
        padding: "10px",
        fontSize: "18px",
        fontWeight: 300,
        fontFamily: "Raleway",
        color: "white",
        textDecoration: "none",
        cursor: "pointer",
    };

    return (
        <ul id="links-list" style={listStyle}>
            <Link href="/links">
            <div
                style={listTitleWrapperStyle}
            >
                <h1 style={listTitleStyle}>Links</h1>
            </div>
            </Link>

            <Link href="https://resume.sudip.me">
            <li
                style={listItemStyle}
            >
                Resume
            </li>
            </Link>
        </ul>
    );
}

export default HomePage;