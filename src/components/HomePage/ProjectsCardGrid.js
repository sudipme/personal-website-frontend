import React from 'react';
import '../../css/ProjectsCardGrid.css';
import { BaseUrl, ApiBaseUrl } from '../../config.js';

function ProjectCard(props){
    const containerStyle = {
        height: '175px',
        borderRadius: '20px',
        border: '0.5px solid rgba(0, 0, 0, 0.1)',
        background: '#FFFFFF',
        filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.20))',
        cursor: 'pointer',
    }
    const titleStyle = {
        textAlign: 'left',
        marginLeft: "30px",
        color: '#000',
        fontFamily: 'Exo, sans-serif',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal'
    }
    const descriptionStyle = {
        marginLeft: "30px",
        textAlign: 'left',
        color: '#000',
        fontFamily: 'Exo, sans-serif',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
    }
   
    return(
        <div onClick={() => window.open(props.link, '_blank')} className='project-card' style={containerStyle} >
            <h3 id="project-title" style={titleStyle}>{props.title}</h3>
            <p id="project-desctiption" style={descriptionStyle}>{props.description}</p>
        </div>
    )
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
        display: 'grid',
        rowGap: '20px',
        columnGap: '20px'
    };
    
    return (
        <div id='grid' style={gridStyle}>
            {
                Object.keys(props.projects).map((key) => {
                    const widget = props.projects[key];
                    return (
                        <ProjectCard
                            key={widget.time_stamp}
                            link={BaseUrl+'blogs/'+widget.project_id}
                            title={widget.project_title}
                            description={widget.project_description}
                        />
                    );
                })
            }
        </div>
    )
}

export default ProjectsCardGrid;