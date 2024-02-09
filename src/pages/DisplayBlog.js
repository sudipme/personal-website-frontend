import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import TopBar from '../components/TopBar.js';
import Footer from '../components/Footer';
import LoadingAnimation from '../components/LoadingAnimation.js';
import '../css/DisplayBlog.css';

import {ApiBaseUrl } from '../config.js';


function DisplayBlog(){
    const { blogId } = useParams();
    const [blogTitle, setBlogTitle] = useState('');
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        // fetch blog title and blogFile
        fetch(ApiBaseUrl + 'blog/' + blogId)
        .then(response => {
            if (response.status === 404) {
                throw new Error('Blog Not Found');
            } else {
                return response.json();
            }
        })
        .then(data => {
            setBlogTitle(data.title);

            //fetch the blog body from the blogFile
            return fetch(ApiBaseUrl + 'blog-content/' + data.blog_file_name)
        })
        .then(response => {
            if (response.status === 404) {
                throw new Error('Not found');
            } else {
                return response.text();
            }
        })
        .then(text => setMarkdown(text))
        .catch(error => {
            console.log(error.message);
            setMarkdown("File not found");
        });
        
    }, []);

    const loadingAnimationContainerStyle ={
        width: "100vw",
        height: "calc(100vh - 65px",
    }

    return(
        <div id='blogs-page' >
            <TopBar />
            {
            markdown === '' ? <div style={loadingAnimationContainerStyle} > <LoadingAnimation/> </div> : 
            <>
            <div id='blog-title-container'>
                <h1 id='blog-title'>{blogTitle}</h1>
            </div>
            <div id='blogs-container'>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
            </div>
            </>
            }
            <Footer />
        </div>
    )
}

export default DisplayBlog;