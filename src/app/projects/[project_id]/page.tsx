import React from "react";
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "@styles/DisplayBlog.css";
import defaultLinkPreview from "@public/images/default-link-preview.png";
import {BaseUrl, ApiBaseUrl } from "@utils/config.js";

export async function generateMetadata({ params }: { params: { project_id: string } }): Promise<Metadata> {
  const blog = await getBlog(params.project_id);
  const blogLink = `${BaseUrl}blogs/${params.project_id}`;
  const ogImage = defaultLinkPreview;

  return {
    title: blog.title,
    description: blog.description,
    metadataBase: new URL(BaseUrl),
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      url: blogLink,
      images: [
        {
          url: ogImage.src,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [ogImage.src],
    },
  };
}

interface Blog {
  title: string;
  description: string;
  blog_file_name: string;
}

async function getBlog(blogId: string): Promise<Blog> {
  try {
    const response = await fetch(`${ApiBaseUrl}blog/${blogId}`);
    if (!response.ok) {
      notFound();
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error;
  }
}

async function getBlogContent(blogFileName: string): Promise<string> {
  try {
    const response = await fetch(`${ApiBaseUrl}blog-content/${blogFileName}`);
    if (!response.ok) {
      throw new Error("Error fetching blog content");
    }
    return response.text();
  } catch (error) {
    console.error("Error fetching blog content:", error);
    throw error;
  }
}

const DisplayBlog: React.FC = async ({ params }: { params: { project_id: string } }) => {

  const blog = await getBlog(params.project_id);
  const markdown = await getBlogContent(blog.blog_file_name);

  return (
    <div id="blogs-page">
      <div id="blog-title-container">
        <h1 id="blog-title">{blog.title}</h1>
      </div>
      <div id="blogs-container">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default DisplayBlog;
