import React, { useState, useEffect } from 'react';

import TopBar from '../components/HomePage/TopBar';
import HighlightsRow from '../components/HomePage/HighlightsRow';
import ProjectCards from '../components/HomePage/ProjectCards';
import FeaturedBlogs from '../components/HomePage/FeaturedBlogs';

import '../css/HomePage.css';

function HomePage() {
    const homePageStyle = {
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    return (
        <div id='home-page' style={homePageStyle}>
            <TopBar />
            <Spacer height="20px" />

            <AboutMe />
            <Spacer height="20px" />
            <Heading content="Highlights" />
            
            <HighlightsRow content="Won the Build for Bharat Hackathon Organized by ONDC" link="https://sudip.me"/>
            <HighlightsRow content="Smart India Hackathon 2024 winner"/>

            <Spacer height="20px" />

            <Heading content="Projects" />
            <ProjectCards />
            <Spacer height="20px" />

            <FeaturedBlogs />

            <Footer />
        </div>
    )
}

function AboutMe() {
    const containerStyle = {
    }
    const paragraphStyle = {
        color: "#000",
        fontFamily: "Raleway",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }
    const firstLineStyle = {
        display: "block",
        lineHeight: "40px",
    }

    return (
        <div id='about-me-container' style={containerStyle}>

            <p id='about-me' style={paragraphStyle}>
                <span style={firstLineStyle}>Hi, I am Sudip.</span>
                I am a Full Stack Developer and a Machine Learning enthusiast.
                Currently I am persuing my Computer Science undergraduate degree from Indian Institute of Information Technology SriCity. 
                I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.

            </p>
        </div>
    )
}

function Heading(props){
    const headingStyle = {
        color: "#888", //#004061
        fontFamily: "Raleway",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    return (
        <div id="heading-container">
            <h1 id="heading-style" style={headingStyle}>{props.content}</h1>
        </div>
    )
}

function Spacer(props){
    const spacerStyle = {
        height: props.height,
    }
    return(
        <div id="spacer" style={spacerStyle}></div>
    )
}


function Footer (){
    const footerContainerStyle = {
        width: "100vw",
        height: "50px",
        backgroundColor: "#252A30",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const contentStyle = {
        color: "#fff",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    return (
        <div id="footer-container" style={footerContainerStyle} >
            <p style={contentStyle}>© Copyright 2024 Sudip Halder </p>
        </div>
    )
}

export default HomePage;
