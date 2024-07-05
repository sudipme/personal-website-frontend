import React, {useState, useEffect} from "react";
// import {ApiBaseUrl} from "../config.js";

import LoadingAnimation from "../components/LoadingAnimation.js";
import Updates from "../components/HomePage/Updates";
import {FeaturedProjects} from "../components/HomePage/FeaturedProjects";
import FeaturedBlogs from "../components/HomePage/FeaturedBlogs";
import Footer from "../components/Footer.js";
import "../css/HomePage.css";
import RightArrowIcon from "../assets/icons/right-arrow-icon.svg";

function HomePage() {
    const [displayPage, setDisplayPage] = useState(false);
    const [isUpdatesLoaded, setIsUpdatesLoaded] = useState(false);
    const [isFeaturedProjectsLoaded, setIsFeaturedProjectsLoaded] =
        useState(false);
    const [isFeaturedBlogsLoaded, setIsFeaturedBlogsLoaded] = useState(false);

    const updatesLoaded = () => {
        setIsUpdatesLoaded(true);
    };
    const featuredProjectsLoaded = () => {
        setIsFeaturedProjectsLoaded(true);
    };
    const featuredBlogsLoaded = () => {
        setIsFeaturedBlogsLoaded(true);
    };

    let allComponentsLoaded =
        isUpdatesLoaded && isFeaturedProjectsLoaded && isFeaturedBlogsLoaded;

    useEffect(() => {
        setDisplayPage(allComponentsLoaded);
    }, [allComponentsLoaded]);

    const homePageStyle = {
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-around",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "rgb(8,8,8)",
    };
    const loadingAnimationContainerStyle = {
        position: "absolute",
        top: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(8,8,8)",
    };
    const infoContainerStyle = {
        display: "flex",
        alignItems: "flex-start",
    };
    return (
        <>
            <div
                style={
                    !displayPage ? loadingAnimationContainerStyle : {display: "none"}
                }
            >
                <LoadingAnimation/>
            </div>

            <div
                id="home-page"
                style={displayPage ? homePageStyle : {display: "none"}}
            >
                <Spacer height="20px"/>
                <div></div>
                <AboutMe/>
                <Spacer height="20px"/>

                <div id="info-container" style={infoContainerStyle}>
                    <Links/>
                    <Updates componentLoaded={updatesLoaded}/>
                </div>
                <Heading title="Projects" link="/projects"/>
                <FeaturedProjects componentLoaded={featuredProjectsLoaded}/>
                <Spacer height="40px"/>
                <FeaturedBlogs conponentLoaded={featuredBlogsLoaded}/>
                <Footer/>
            </div>
        </>
    );
}

function AboutMe() {
    // const [aboutMeText, setAboutMeText] = useState("");
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

    // useEffect(() => {
    //   fetch(ApiBaseUrl + "about-me-text")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setAboutMeText(data.about_me);
    //     });
    // }, []);
    //
    // useEffect(() => {
    //   if (aboutMeText !== "") {
    //     document.getElementById("about-me").innerHTML = aboutMeText.replace(
    //       /\n/g,
    //       "<br>",
    //     );
    //   }
    // });

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
        fontSize: "24px",
        color: "#f5f5f7",
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };
    const rightArrowIconStyle = {
        fontSize: "28px",
        fontWeight: "400",
        width: "20px",
    };
    return (
        <div
            style={headingContainerStyle}
            onClick={() => (window.location.href = props.link)}
        >
            <h1 style={headingStyle}>{props.title} &nbsp;</h1>
            <img
                src={RightArrowIcon}
                style={rightArrowIconStyle}
                alt="expand button"
            ></img>
        </div>
    );
}

function Spacer(props) {
    const spacerStyle = {
        height: props.height,
    };
    return <div id="spacer" style={spacerStyle}></div>;
}

function Links() {
    const listStyle = {
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
        fontSize: "24px",
        color: "#f5f5f7",
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };
    const listItemStyle = {
        width: "100%",
        color: "rgb(41, 151, 255)",
        cursor: "pointer",
        boxSize: "border-box",
        fontSize: "18px",
        textDecoration: "underline",
    };

    return (
        <ul id="links-list" style={listStyle}>
            <div
                style={listTitleWrapperStyle}
                onClick={() => (window.location.href = "/links")}
            >
                <h1 style={listTitleStyle}>Links</h1>
            </div>

            <li
                style={listItemStyle}
                onClick={() => window.open("https://resume.sudip.me", "_blank")}
            >
                Resume
            </li>
        </ul>
    );
}

export default HomePage;
