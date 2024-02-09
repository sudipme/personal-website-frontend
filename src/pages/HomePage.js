import React, { useState, useEffect } from 'react';

import LoadingAnimation  from '../components/LoadingAnimation.js';
import TopBar from '../components/TopBar.js';
import HighlightsRow from '../components/HomePage/Highlights';
import {FeaturedProjects} from '../components/HomePage/FeaturedProjects';
import FeaturedBlogs from '../components/HomePage/FeaturedBlogs';
import Footer from '../components/Footer.js';
import '../css/HomePage.css';
import {ApiBaseUrl} from '../config.js';


function HomePage() {
    const [isHighlightsLoaded, setIsHighlightsLoaded] = useState(false);
    const [isFeaturedProjectsLoaded, setIsFeaturedProjectsLoaded] = useState(false);
    const [isFeaturedBlogsLoaded, setIsFeaturedBlogsLoaded] = useState(false);
    const highlightsLoaded = () => {setIsHighlightsLoaded(true);}
    const featuredProjectsLoaded = () => {setIsFeaturedProjectsLoaded(true);}
    const featuredBlogsLoaded = () => {setIsFeaturedBlogsLoaded(true);}

    let everythingLoaded = isHighlightsLoaded && isFeaturedProjectsLoaded && isFeaturedBlogsLoaded;

    const homePageStyle = {
        width: "100vw",
        minHeight:"100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-around",
        alignItems: "center",
        overflow: "hidden",
    }

    const loadingAnimationContainerStyle = {
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
    <>
        <div style={everythingLoaded ?{ display: "none" } :loadingAnimationContainerStyle }>
            <LoadingAnimation/>
        </div>

        <div id='home-page'  style={everythingLoaded ? homePageStyle : { display: "none" }}>
            <TopBar />
            <Spacer height="20px" />

            <div ></div>
            <AboutMe />
            <Spacer height="20px" />

            <Heading content="Highlights" />
            <HighlightsRow componentLoaded={highlightsLoaded}/>

            <Spacer height="20px" />

            <Heading content="Projects" />
            <FeaturedProjects componentLoaded={featuredProjectsLoaded} />
            <Spacer height="20px" />
            <FeaturedBlogs conponentLoaded={featuredBlogsLoaded} />
            <Footer />
        </div>
        </>
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
