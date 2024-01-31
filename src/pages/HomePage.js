import React, { useState, useEffect } from 'react';

import TopBar from '../components/HomePage/TopBar';
import HighlightsRow from '../components/HomePage/HighlightsRow';
import ProjectCards from '../components/HomePage/ProjectCards';
import BlogsRow from '../components/HomePage/BlogRows';

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
            <Blogs />
            <Footer />
        </div>
    )
}

function AboutMe() {
    const containerStyle = {
        width: "900px",
        paddingLeft: "100px",
    }
    const paragraphStyle = {
        width: "650px",
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
        <div style={containerStyle}>
            <div id='about-me' style={paragraphStyle}>
                <p>
                <span style={firstLineStyle}>Hi, I am Sudip.</span>
                I am a Full Stack Developer and a Machine Learning enthusiast.
                Currently I am persuing my Computer Science undergraduate degree from Indian Institute of Information Technology SriCity. 
                I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.
                </p>
            </div>
        </div>
    )
}

function Heading(props){
    const headingStyle = {
        color: "#004061",
        fontFamily: "Open Sans",
        fontSize: "24px",
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

function Blogs(){
    const blogsContainerStyle = {
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        judtifyContent: "center",
        alignItems: "center",
        backgroundColor: "#005581",
    }
    const blogsTitleStyle = {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Raleway",
        fontSize: "36px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const viewAllContainerStyle = {
        width: '100vw',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
    const viewAllStyle = {
        testAlign: 'center',
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal'
    }
    return(
        <div id="blogs-container" style={blogsContainerStyle}>
            <h1 id="blogs-heading" style={blogsTitleStyle}>Blogs</h1>
            <BlogsRow link="https://sudip.me" title="Deploy django project on server using gunicorn and Nginx" description="Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.Hi, I am Sudip. Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.Hi, I am Sudip. Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science."/>
            <BlogsRow title="Linear regression Using Scikit learn"  description="Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.Hi, I am Sudip. Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.Hi, I am Sudip. Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science."/>
            <BlogsRow title="Linear regression Using Scikit learn" description="Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.Hi, I am Sudip. Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science.Hi, I am Sudip. Currently I am persuing my Computer Science undergraduate degree . I enjoy taking part in coding contests and actively learning about Machine Learning and Data Science."/>

            <div id='view-all-container' style={viewAllContainerStyle}>
                <p style={viewAllStyle}>View all</p>
            </div>
        </div>
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
