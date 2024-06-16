import React, { useState, useEffect } from "react";
import ProjectsCardGrid from "../ProjectsCardGrid.js";
import LoadingAnimation from "../LoadingAnimation.js";
import { ApiBaseUrl } from "../../config.js";

export function FeaturedProjects(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projects, setProjects] = useState(null);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    fetch(ApiBaseUrl + "featured-projects/")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.featured_projects);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const gridContainerStyle = {
    maxWidth: "100vw",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    overflow: "hidden",
  };

  useEffect(() => {
    if (projects !== null) {
      props.componentLoaded();
    }
  }, [projects]);
  return (
    <>
      {projects === null ? (
        <LoadingAnimation />
      ) : (
        <div id="grid-container" style={gridContainerStyle}>
          <>
            <ProjectsCardGrid projects={projects} windowWidth={windowWidth} />
          </>
        </div>
      )}
    </>
  );
}
