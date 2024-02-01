import React, { useState, useEffect } from 'react';

import TopBar from '../components/HomePage/TopBar';
import '../css/DisplayBlog.css';

import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { BaseUrl, ApiBaseUrl } from '../config.js';


function DisplayBlog(){
    const { blogId } = useParams();
    const [blogTitle, setBlogTitle] = useState('');
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        // fetch blog title and blogFile
        fetch(ApiBaseUrl + 'blogs/' + blogId)
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

    return(
        <div id='blogs-page' >
            <TopBar />
            <div id='blog-title-container'>
                <h1 id='blog-title'>{blogTitle}</h1>
            </div>
            <div id='blogs-container'>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
            </div>
        </div>
    )
}

export default DisplayBlog;