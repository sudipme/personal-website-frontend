import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Footer from "../src/app/components/Footer.js";
import LoadingAnimation from "../../components/archive/LoadingAnimation.js/index.js";
import "../css/DisplayBlog.css";
import defaultLinkPreview from "../assets/default-link-preview.png";

import { ApiBaseUrl } from "../src/config.js";

function DisplayBlog() {
  const { blogId } = useParams();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogLink, setBlogLink] = useState("");
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // fetch blog title and blogFile
    fetch(ApiBaseUrl + "blog/" + blogId)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Blog Not Found");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setBlogTitle(data.title);
        setBlogDescription(data.description);
        setBlogLink(data.link);

        //fetch the blog body from the blogFile
        return fetch(ApiBaseUrl + "blog-content/" + data.blog_file_name);
      })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Not found");
        } else {
          return response.text();
        }
      })
      .then((text) => setMarkdown(text))
      .catch((error) => {
        console.log(error.message);
        setMarkdown("File not found");
      });
  }, []);

  const loadingAnimationContainerStyle = {
    width: "100vw",
    height: "calc(100vh - 65px",
    backgroundColor: "#000",
  };

  return (
    <div id="blogs-page">
      {markdown === "" ? (
        <div style={loadingAnimationContainerStyle}>
          {" "}
          <LoadingAnimation />{" "}
        </div>
      ) : (
        <>
          <Helmet>
            <title>{blogTitle}</title>
            <meta name="description" content={blogDescription}/>

            {/* Open Graph meta tags */}
            <meta property="og:title" content={blogTitle} />
            <meta property="og:description" content={blogDescription} />
            <meta property="og:image" content={defaultLinkPreview} />
            <meta property="og:url" content={blogLink} />
            <meta property="og:type" content="article" />

            {/* Twitter Card meta tags (optional) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={blogTitle} />
            <meta name="twitter:description" content={blogDescription} />
            <meta name="twitter:image" content={defaultLinkPreview} />
          </Helmet>
          <div id="blog-title-container">
            <h1 id="blog-title"> {blogTitle}</h1>
          </div>
          <div id="blogs-container">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default DisplayBlog;
