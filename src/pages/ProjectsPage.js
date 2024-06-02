import React, { useState, useEffect } from "react";
import { ApiBaseUrl } from "../config.js";
import TopBar from "../components/TopBar";
import ProjectsCardGrid from "../components/ProjectsCardGrid.js";
import LoadingAnimation from "../components/LoadingAnimation.js";
import "../css/ProjectsPage.css";

function ProjectsPage() {
  const [projects, setProjects] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    fetch(ApiBaseUrl + "projects-page/" + pageNumber)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setTotalPages(data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [pageNumber]);

  const projectsContainerStyle = {
    backgroundColor: "#000",
    minHeight: "100vh",
  };

  const loadingAnimationContainerStyle = {
    width: "100vw",
    height: "calc(100vh - 165px)",
  };

  return (
    <div style={projectsContainerStyle}>
      <div id="projects-page-container">
        <TopBar />
        {projects === null ? (
          <div style={loadingAnimationContainerStyle}>
            {" "}
            <LoadingAnimation />{" "}
          </div>
        ) : (
          <div id="projects-container">
            <ProjectsCardGrid windowWidth={windowWidth} projects={projects} />
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
    </div>
  );
}

export default ProjectsPage;
