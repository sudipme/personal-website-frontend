import React, { useState, useEffect } from 'react';

import TopBar from '../components/HomePage/TopBar';
import HighlightsRow from '../components/HomePage/Highlights';
import {FeaturedProjects} from '../components/HomePage/FeaturedProjects';
import Footer from '../components/HomePage/Footer';
import FeaturedBlogs from '../components/HomePage/FeaturedBlogs';
import '../css/HomePage.css';
import { BaseUrl, ApiBaseUrl } from '../config.js';

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
            
            <HighlightsRow/>

            <Spacer height="20px" />

            <Heading content="Projects" />
            <FeaturedProjects />
            <Spacer height="20px" />

            <FeaturedBlogs />

            <Footer />
        </div>
    )
}

function AboutMe() {
    const [aboutMeText, setAboutMeText] = useState("");
    const paragraphStyle = {
        color: "#000",
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }
    const firstLineStyle = {
        display: "block",
        lineHeight: "40px",
    }
    
    useEffect(() => {
        fetch(ApiBaseUrl + 'about-me-text')
        .then(response => response.json())
        .then(data => {
            setAboutMeText(data.about_me);
        })
    }, [])

    useEffect(() => {
        if(aboutMeText !== ""){
            document.getElementById('about-me').innerHTML = aboutMeText.replace(/\n/g, "<br>");
        }
    })

    return (
        <div id='about-me-container'>

            <p id='about-me' style={paragraphStyle}>
                <span style={firstLineStyle}>Hi, I am Sudip.</span>
            </p>
        </div>
    )
}

function Heading(props){
    const headingStyle = {
        color: "#888", //#004061
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }
    return (
        <div id="heading-container">
            <h1 id="heading" style={headingStyle}>{props.content}</h1>
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




export default HomePage;
