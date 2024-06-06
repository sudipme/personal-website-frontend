import React, { useState, useEffect } from "react";
import { BaseUrl, ApiBaseUrl } from "../config.js";
import TopBar from "../components/TopBar.js";
import LoadingAnimation from "../components/LoadingAnimation.js";
import "../css/BlogsPage.css";

function BlogsRow(props) {
  const blogRowContainerStyle = {
    margin: "10px 0px",
    overflow: "hidden",
    cursor: "pointer",
  };
  const blogTitleStyle = {
    margin: "5px 0px",
    textAlign: "left",
    color: "#fff",
    fontSize: "1.5em",
    fontFamily: "Sohne, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };
  const blogDescriptionStyle = {
    margin: "5px 0px",
    textAlign: "left",
    color: "#ddd",
    fontFamily: "Sohne, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <div
      id="blogs-row-container"
      style={blogRowContainerStyle}
      onClick={() => (window.location.href = props.link)}
    >
      <h2 id="blog-row-title" style={blogTitleStyle}>
        {props.title}
      </h2>
      <h3 id="blog-row-description" style={blogDescriptionStyle}>
        {props.description}
      </h3>
    </div>
  );
}

function BlogsPage() {
  const [blogs, setBlogs] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch(ApiBaseUrl + "blogs-page/" + pageNumber)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs);
        setTotalPages(data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pageNumber]);

  const blogsContainerStyle = {
    width: "100vw",
    minHeight: "100vh",
    paddingTop: "20px",
    marginBottom: "0px",
    paddingBottom: "100px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "rgba(8,8,8)",
  };
  const loadingAnimationContainerStyle = {
    width: "100vw",
    height: "calc(100vh - 100px)",
    backgroundColor: "rgba(8,8,8)",
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <TopBar />
      {blogs === null ? (
        <div style={loadingAnimationContainerStyle}>
          {" "}
          <LoadingAnimation />{" "}
        </div>
      ) : (
        <div id="blogs-container" style={blogsContainerStyle}>
          {Object.keys(blogs).map((key) => {
            return (
              <BlogsRow
                key={blogs[key].time_stamp}
                link={BaseUrl + "blogs/" + blogs[key].blog_id}
                title={blogs[key].blog_title}
                description={blogs[key].blog_description}
              />
            );
          })}
        </div>
      )}
      <div id="pagination-container">
        <button
          className="pagination-button"
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        <h3 id="page-counter">
          ({pageNumber + 1} / {totalPages} )
        </h3>
        <button
          className="pagination-button"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber + 1 === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BlogsPage;
