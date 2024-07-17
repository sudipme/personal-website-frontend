import React, { CSSProperties } from "react";
import Link from "next/link";

import Updates from "./components/Updates";
import FeaturedBlogs from "./components/FeaturedBlogs";
import "@styles/HomePage.css";

function HomePage() {

    const homePageStyle: CSSProperties = {
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "rgb(8,8,8)",
    };
    return (
        <>
            <div
                id="home-page"
                style={homePageStyle}
            >
                <AboutMe />
                <InfoContainer />
                <FeaturedBlogs />
            </div>
        </>
    );
}

function AboutMe() {
    const paragraphStyle = {
        maxWidth: "1400px",
        margin: "40px 0",
        color: "#f5f5f7",
        fontFamily: "var(--font-montserrat)",
        fontStyle: "normal",
        lineHeight: "normal",
        zIndex: 1,
    };
    const firstLineStyle = {
        display: "block",
        lineHeight: "40px",
    };

    return (
        <p id="about-me" style={paragraphStyle}>
            <span style={firstLineStyle}>
            </span>
            Hello there! I'm Sudip.
            <br />
            <br />
            I'm currently pursuing an undergraduate degree in Computer Science at the Indian Institute of
            Information Technology, Sri City.
            <br />
            <br />
            One of my favorite aspects of being a computer science student is participating in weekly coding
            contests. These challenges allow me to apply my problem-solving skills, algorithmic thinking, and
            programming prowess to real-world scenarios.
            <br />
            <br />
            Machine learning is a domain that truly excites me. I am actively investing time and effort into
            understanding the intricacies of ML algorithms, techniques, and their practical applications.
        </p>
    );
}

function InfoContainer() {
    const infoContainerStyle: CSSProperties = {
        maxWidth: "1400px",
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "#000",
        padding: "20px",
        borderRadius: "28px",
    };
    const borderStyle: CSSProperties = {
        margin: "40px 0",
    }
    return (
        <div className="glowing-border" style={borderStyle}>
            <div id="info-container" style={infoContainerStyle}>
                <Updates />
                <Links />
            </div>
        </div>
    )
}

function Links() {
    const listStyle: CSSProperties = {
        margin: "0",
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
        fontFamily: "var(--font-raleway)",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };
    const listItemStyle: CSSProperties = {
        width: "100%",
        padding: "5px",
        fontSize: "20px",
        fontWeight: 400,
        fontFamily: "var(--font-montserrat)",
        color: "#0072f5",
        textDecoration: "underline",
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

            <Link href="/projects">
                <li
                    style={listItemStyle}
                >
                    Projects
                </li>
            </Link>

            <Link href="https://sudip.me/resume/">
                <li
                    style={listItemStyle}
                >
                    Resume
                </li>
            </Link>
            <Link href="https://github.com/sudipme/notebooks">
                <li
                    style={listItemStyle}
                >
                    Notebooks
                </li>
            </Link>
        </ul>
    );
}

export default HomePage;