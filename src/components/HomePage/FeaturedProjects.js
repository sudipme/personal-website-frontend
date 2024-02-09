import React, { useState, useEffect } from 'react';
import ProjectsCardGrid from '../ProjectsCardGrid.js';
import LoadingAnimation from '../LoadingAnimation.js';
import { BaseUrl, ApiBaseUrl } from '../../config.js';

export function FeaturedProjects(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [projects, setProjects] = useState(null);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        fetch(ApiBaseUrl+'featured-projects/')
        .then(response => response.json())
        .then(data => {setProjects(data.featured_projects);})
        .catch(error => {
        console.error('Error fetching data:', error);
        });
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };

    }, []);

    const gridContainerStyle = {
        maxWidth: '100vw',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        overflow: 'hidden',
    };

    const viewAllContainerStyle = {
        width: "100%",
        height: "50px",
        borderRadius: '0 0 20px 20px',
        background: '#bbb',
        position: 'relative',
        top: '-15px',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }

    const viewAllStyle = {
        color: '#000',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal'
    }
    useEffect(()=>{
        if(projects!==null){props.componentLoaded();}
    },[projects])
    return (
        <>{
        projects === null ? <LoadingAnimation/>  :
        <div id='grid-container' style={gridContainerStyle}>
        <><ProjectsCardGrid projects={projects} windowWidth={windowWidth} />
        <div onClick={() => window.location.href = (BaseUrl+'projects')} style={viewAllContainerStyle}>
            <p style={viewAllStyle}>View all</p>
        </div></>
        </div>
        }</>
    );
}