import React, { useState, useEffect } from 'react';
import '../../css/FeaturedBlogs.css';
import { BaseUrl, ApiBaseUrl } from '../../config.js';
import LoadingAnimation from '../LoadingAnimation.js';

function BlogsRow(props){
    const blogRowContainerStyle = {
        overflow: "hidden",
        cursor: "pointer",
    }
    const blogTitleStyle = {
        margin: "5px 0px",
        textAlign: "left",
        fontFamily: "Exo",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const blogDescriptionStyle = {
        margin: "5px 0px",
        textAlign: "left",
        color: "#000",
        fontFamily: "Exo 2",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    return (
        <div id="featured-blogs-row-container" style={blogRowContainerStyle} onClick={() => window.open(props.link, '_blank')}>
            <h2 id="featured-blog-title" style={blogTitleStyle}>{props.title}</h2>
            <h3 id="featured-blog-description" style={blogDescriptionStyle}>{props.description}</h3>
            
        </div>
    )
}

function FeaturedBlogs(props){
    const [FeaturedBlogs, setFeaturedBlogs] = useState(null);
    useEffect(() => {

        fetch(ApiBaseUrl+'featured-blogs')
        .then(response => response.json())
        .then(data => {setFeaturedBlogs(data.featured_blogs);})
        .catch(error => {
        console.error('Error fetching data:', error);
        });

    }, []);

    const blogsContainerStyle = {
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        judtifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ddd",
        overflow: "hidden",
    }
    const blogsContainerTitleStyle = {
        textAlign: "center",
        color: "#000",
        fontFamily: "Raleway",
        margin: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const viewAllContainerStyle = {
        width: '100vw',
        height: '50px',
        margin: '10px 0 5px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
    const viewAllStyle = {
        testAlign: 'center',
        color: '#000',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        cursor: 'pointer',
    }
    useEffect(()=>{
        if(FeaturedBlogs!==null){props.conponentLoaded();}
    },[FeaturedBlogs])
    return(
        <>
            {FeaturedBlogs === null ? <LoadingAnimation/> :
            <div id="blogs-container" style={blogsContainerStyle}>
            <h1 id="blogs-heading" style={blogsContainerTitleStyle}>Blogs</h1>
            {
            Object.keys(FeaturedBlogs).map((key) => {
            return (
                <BlogsRow
                    key={FeaturedBlogs[key].time_stamp}
                    link={BaseUrl+'blogs/'+FeaturedBlogs[key].blog_id}
                    title={FeaturedBlogs[key].blog_title}
                    description={FeaturedBlogs[key].blog_description}
                />
            )})}
            <div id='view-all-container' style={viewAllContainerStyle}>
                <p style={viewAllStyle} onClick={() => window.location.href=(BaseUrl+'blogs')}>View all</p>
            </div>
            </div>
            }
        </>
    )
}

export default FeaturedBlogs;