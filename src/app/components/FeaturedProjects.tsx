import React, {CSSProperties} from "react";
import Link from "next/link";

import ProjectsCardGrid from "@components/ProjectsCardGrid";
import RightArrowIcon from "@public/icons/right-arrow-icon.svg";
import { ApiBaseUrl } from "@utils/config.js";

interface FeaturedProject {
  project_id: string;
  project_title: string;
  project_description: string;
}

async function getFeaturedProjects(): Promise<FeaturedProject[]> {
  try {
    const response = await fetch(ApiBaseUrl + "featured-projects");
    if (!response.ok) {
      throw new Error('Failed to fetch featured projects');
    }
    const data = await response.json();
    return data.featured_projects;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const FeaturedProjects: React.FC = async () => {
  const featuredProjects = await getFeaturedProjects();

  const gridContainerStyle = {
    maxWidth: "100vw",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    overflow: "hidden",
  };

  const projectsContainerTitleStyle: CSSProperties = {
    fontSize: "28px",
    textAlign: "center",
    color: "#f5f5f7",
    fontFamily: "Raleway",
    margin: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const rightArrowIconStyle = {
    fontWeight: "400",
    width: "15px",
    margin: "0 0 0 10px",
  };

  return (
    <>
      <div id="grid-container" style={gridContainerStyle}>
        <Link href="/projects">
        <h1 id="featured-projects-title" style={projectsContainerTitleStyle}>
          Projects
          <img
            src={RightArrowIcon.src}
            style={rightArrowIconStyle}
            alt="expand button"
          ></img>
        </h1>
        </Link>
        <ProjectsCardGrid projects={featuredProjects} />
      </div>
    </>
  );
}

export default FeaturedProjects;
