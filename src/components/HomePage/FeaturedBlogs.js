import React, { useState, useEffect } from 'react';
import '../../css/FeaturedBlogs.css';
import { BaseUrl, ApiBaseUrl } from '../../config.js';

function BlogsRow(props){
    const blogRowContainerStyle = {
        overflow: "scroll",
        cursor: "pointer",
    }
    const blogTitleStyle = {
        textAlign: "left",
        fontFamily: "Exo",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const blogDescriptionStyle = {
        textAlign: "left",
        color: "#000",
        fontFamily: "Exo 2",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    return (
        <div id="blogs-row-container" style={blogRowContainerStyle} onClick={() => window.open(props.link, '_blank')}>
            <h2 id="blog-title" style={blogTitleStyle}>{props.title}</h2>
            <h3 id="blog-description" style={blogDescriptionStyle}>{props.description}</h3>
            
        </div>
    )
}

function FeaturedBlogs(){
    const [FeaturedBlogs, setFeaturedBlogs] = useState(null);
    useEffect(() => {

        fetch(ApiBaseUrl+'featured-blogs')
        .then(response => response.json())
        .then(data => {setFeaturedBlogs(data.featured_blogs);})
        .catch(error => {
        console.error('Error fetching data:', error);
        });

    }, []);

    if (FeaturedBlogs == null){
        return (<div> Loading . . .</div>)
    } 

    const blogsContainerStyle = {
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        judtifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd",
    }
    const blogsContainerTitleStyle = {
        textAlign: "center",
        color: "#000",
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
        color: '#000',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        cursor: 'pointer',
    }
    return(
        <div id="blogs-container" style={blogsContainerStyle}>
            <h1 id="blogs-heading" style={blogsContainerTitleStyle}>Blogs</h1>
            {
                Object.keys(FeaturedBlogs).map((key) => {
                    return (
                        <BlogsRow
                            key={FeaturedBlogs[key].id}
                            link={BaseUrl+'blogs/'+FeaturedBlogs[key].blog_id}
                            title={FeaturedBlogs[key].blog_title}
                            description={FeaturedBlogs[key].blog_description}
                        />
                    )
                })
            }
            <div id='view-all-container' style={viewAllContainerStyle}>
                <p style={viewAllStyle} onClick={() => window.open(BaseUrl+'blogs', '_blank')}>View all</p>
            </div>
        </div>
    )
}

export default FeaturedBlogs;