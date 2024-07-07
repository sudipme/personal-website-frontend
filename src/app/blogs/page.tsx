import React, { CSSProperties } from "react";
import Link from "next/link";
import { Metadata } from 'next';

import { BaseUrl, ApiBaseUrl } from "@utils/config.js";
import "@styles/BlogsPage.css";

export const metadata: Metadata = {
  title: 'Blogs by Sudip | Insights on Machine Learning, AI and More',
  description: 'Sudip Halder is a Software Developer and a Machine Learning expert. Read his blogs on Machine Learning and AI, and learn more about his projects and experiences.',
}

interface BlogsRowProps {
  title: string;
  description: string;
  link: string;
}

const BlogsRow: React.FC<BlogsRowProps> = ({ title, description, link }) => {
  const blogRowContainerStyle: CSSProperties = {
    margin: "10px 0px",
    overflow: "hidden",
    cursor: "pointer",
  };
  const blogTitleStyle: CSSProperties = {
    margin: "5px 0px",
    textAlign: "left",
    color: "#fff",
    fontSize: "1.5em",
    fontFamily: "Sohne, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };
  const blogDescriptionStyle: CSSProperties = {
    margin: "5px 0px",
    textAlign: "left",
    color: "#ddd",
    fontFamily: "Sohne, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <Link href={link}>
      <div
        id="blogs-row-container"
        style={blogRowContainerStyle}
      >
        <h2 id="blog-row-title" style={blogTitleStyle}>
          {title}
        </h2>
        <h3 id="blog-row-description" style={blogDescriptionStyle}>
          {description}
        </h3>
      </div>
    </Link>
  );
}

interface Blog {
  blog_id: string;
  blog_title: string;
  blog_description: string;
  time_stamp: string;
}

interface BlogsResponse {
  blogs: { [key: string]: Blog };
  total_pages: number;
}

async function getBlogs(page: number): Promise<BlogsResponse> {
  const res = await fetch(`${ApiBaseUrl}blogs-page/${page}`);
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return res.json();
}

export default async function BlogsPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = parseInt(searchParams.page || '0', 10);
  const { blogs, total_pages } = await getBlogs(currentPage);

  const blogsContainerStyle: CSSProperties = {
    width: "100vw",
    minHeight: "calc(100vh - 140px)",
    paddingTop: "20px",
    marginBottom: "0px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "rgba(8,8,8)",
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div id="blogs-container" style={blogsContainerStyle}>
        {Object.values(blogs).map((blog) => (
          <BlogsRow
            key={blog.time_stamp}
            link={`/blogs/${blog.blog_id}`}
            title={blog.blog_title}
            description={blog.blog_description}
          />
        ))}
      </div>

      <div id="pagination-container">
        <a
          className="pagination-button"
          href={`/blogs?page=${currentPage - 1}`}
          style={{ pointerEvents: currentPage === 0 ? 'none' : 'auto', opacity: currentPage === 0 ? 0.5 : 1 }}
        >
          Previous
        </a>
        <h3 id="page-counter">
          ( {currentPage + 1} / {total_pages} )
        </h3>
        <a
          className="pagination-button"
          href={`/blogs?page=${currentPage + 1}`}
          style={{ pointerEvents: currentPage + 1 === total_pages ? 'none' : 'auto', opacity: currentPage + 1 === total_pages ? 0.5 : 1 }}
        >
          Next
        </a>
      </div>
    </div>
  );
}