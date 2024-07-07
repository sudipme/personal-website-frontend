import React, { CSSProperties } from "react";
import { Metadata } from 'next';

import ProjectsCardGrid from "@components/ProjectsCardGrid";
import "@styles/ProjectsPage.css";
import { ApiBaseUrl } from "@utils/config.js";

export const metadata: Metadata = {
    title: 'Projects and Experience | Machine Learning, Web Development',
    description: 'Sudip Halder is a Software Developer and a Machine Learning expert. Read his blogs on Machine Learning and AI, and learn more about his projects and experiences.',
}

interface Project {
    project_id: string;
    project_title: string;
    project_description: string;
}

interface ProjectResponse {
    projects: { [key: string]: Project };
    total_pages: number;
}
async function getProjects(page: number): Promise<ProjectResponse> {
    const res = await fetch(`${ApiBaseUrl}projects-page/${page}`);
    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }
    return res.json();
}

export default async function ProjectsPage({ searchParams }: { searchParams: { page?: string } }) {
    const currentPage = parseInt(searchParams.page || '0', 10);
    const { projects, total_pages } = await getProjects(currentPage);

    const projectsContainerStyle: CSSProperties = {
        width: "100vw",
        minHeight: "calc(100vh - 140px)",
        paddingTop: "50px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "rgba(8,8,8)",
    };

    return (
        <div>
            <div id="projects-container" style={projectsContainerStyle}>
                <ProjectsCardGrid projects={projects} />
            </div>
            <div id="pagination-container">
                <a
                    className="pagination-button"
                    href={`/projects?page=${currentPage - 1}`}
                    style={{ pointerEvents: currentPage === 0 ? 'none' : 'auto', opacity: currentPage === 0 ? 0.5 : 1 }}
                >
                    Previous
                </a>
                <h3 id="page-counter">
                    ( {currentPage + 1} / {total_pages} )
                </h3>
                <a
                    className="pagination-button"
                    href={`/projects?page=${currentPage + 1}`}
                    style={{ pointerEvents: currentPage + 1 === total_pages ? 'none' : 'auto', opacity: currentPage + 1 === total_pages ? 0.5 : 1 }}
                >
                    Next
                </a>
            </div>
        </div>
    );
}

