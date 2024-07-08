import React, {CSSProperties} from "react";
import Link from "next/link";

import "@styles/ProjectsCardGrid.css";

function ProjectCard(props) {
  const containerStyle: CSSProperties = {
    height: "175px",
    background: "#000",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "28px",
    border: "1px solid #555555",
    // borderBottom: "2px solid rgba(255, 255, 255, 0.4)",
    // borderRight: "2px solid rgba(255, 255, 255, 0.4)",
  };
  const titleStyle: CSSProperties = {
    textAlign: "left",
    marginLeft: "30px",
    marginBottom: "10px",
    color: "#FFF",
    fontFamily: "var(--font-exo)",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  };
  const descriptionStyle: CSSProperties = {
    marginLeft: "30px",
    textAlign: "left",
    color: "#ccc",
    fontFamily: "var(--font-exo)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  return (
    <Link href={props.link}>
    <div
      className="project-card"
      style={containerStyle}
    >
      <h3 id="project-title" style={titleStyle}>
        {props.title}
      </h3>
      <p id="project-desctiption" style={descriptionStyle}>
        {props.description}
      </p>
    </div>
    </Link>
  );
}

function ProjectsCardGrid(props) {
  const { projects } = props;

  if (projects === null) {
    return <div>Loading...</div>;
  }

  if (!projects || Object.keys(projects).length === 0) {
    return <div>No data available</div>;
  }

  const gridStyle = {
    display: "grid",
    rowGap: "25px",
    columnGap: "25px",
    overflow: "hidden",
  };

  return (
    <div id="grid" style={gridStyle}>
      {Object.keys(props.projects).map((key) => {
        const widget = props.projects[key];
        return (
          <ProjectCard
            key={widget.time_stamp}
            link={"/projects/" + widget.project_id}
            title={widget.project_title}
            description={widget.project_description}
          />
        );
      })}
    </div>
  );
}

export default ProjectsCardGrid;
