import React, { CSSProperties } from "react";
import Link from 'next/link';

import "@styles/FeaturedBlogs.css";

import {ApiBaseUrl} from "@utils/config.js";


interface BlogRowProps {
    title: string;
    description: string;
    link: string;
}

const BlogsRow: React.FC<BlogRowProps> = ({ title, description, link }) => {
    const blogRowContainerStyle = {
        maxWidth: "1400px",
        overflow: "hidden",
        cursor: "pointer",
    };
    const blogTitleStyle: CSSProperties = {
        margin: "5px 0px",
        textAlign: "left",
        fontFamily: "Sohne, sans-serif",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };
    const blogDescriptionStyle: CSSProperties = {
        margin: "5px 0px",
        textAlign: "left",
        color: "#ccc",
        fontFamily: "Sohne, sans-serif",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    return (
        <Link href={link} style={{textDecoration: 'none'}}>
            <div
                id="featured-blogs-row-container"
                style={blogRowContainerStyle}
            >
                <h2 id="featured-blog-title" style={blogTitleStyle}>
                    {title}
                </h2>
                <h3 id="featured-blog-description" style={blogDescriptionStyle}>
                    {description}
                </h3>
            </div>
        </Link>
    );
};

interface FeaturedBlog {
    time_stamp: string;
    blog_id: string;
    blog_title: string;
    blog_description: string;
}

async function getFeaturedBlogs(): Promise<FeaturedBlog[]> {
    try {
        const response = await fetch(ApiBaseUrl + "featured-blogs");
        if (!response.ok) {
            throw new Error('Failed to fetch featured blogs');
        }
        const data = await response.json();
        return data.featured_blogs;
    } catch (error) {
        console.error("Error fetching featured blogs data:", error);
        throw error;
    }
}

const FeaturedBlogs: React.FC = async () => {
    const featuredBlogs = await getFeaturedBlogs();

    const blogsContainerStyle: CSSProperties = {
        width: "100vw",
        marginTop: "40px",
        paddingTop: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        overflow: "hidden",
        borderRadius: "50px 50px 0 0",
        border: "1px solid #fff",
        borderRight: "0",
        borderBottom: "0",
        borderLeft: "0",
        boxShadow: "0px 100px 200px 10px #fff",
    };
    const blogsContainerTitleStyle: CSSProperties = {
        textAlign: "center",
        color: "#f5f5f7",
        fontFamily: "var(--font-raleway)",
        margin: "10px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };
    const viewAllContainerStyle: CSSProperties = {
        width: "100vw",
        height: "50px",
        margin: "10px 0 5px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    };
    const viewAllStyle: CSSProperties = {
        textAlign: "center",
        color: "#ddd",
        fontFamily: "var(--font-raleway)",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        cursor: "pointer",
    };
    return (
        <div style={blogsContainerStyle}>
            {/* <h1 id="blogs-heading" style={blogsContainerTitleStyle}>
                Blogs
            </h1> */}
            {featuredBlogs.map((blog) => (
                <BlogsRow
                    key={blog.time_stamp}
                    link={"/blogs/" + blog.blog_id}
                    title={blog.blog_title}
                    description={blog.blog_description}
                />
            ))}

            <div id="view-all-container" style={viewAllContainerStyle}>
                <Link href={"/blogs"} style={{textDecoration: 'none'}}>
                    <p style={viewAllStyle}> View all </p>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedBlogs;