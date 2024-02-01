import React, { useState, useEffect } from 'react';
import '../../css/ProjectCards.css';

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

function ProjectCardsGrid(props) {

    const { widgets } = props;

    if (widgets === null) {
        // Return a loading state
        return <div>Loading...</div>;
      }
    
      if (!widgets || Object.keys(widgets).length === 0) {
        // Handle the case when there is no data
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
                Object.keys(props.widgets).map((key) => {
                    const widget = props.widgets[key];
                    let size = widget.size;
                    if (props.windowWidth < 1300) {
                        size = widget.mSize
                    }

                    return (
                        
                        <ProjectCard
                            key={widget.id}
                            link={BaseUrl+'projects/'+widget.id}
                            title={widget.title}
                            description={widget.description}
                        />
                    );
                })
            }
        </div>
    )
}

function ProjectCardsContainer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [widgets, setWidgets] = useState(null);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);

           // Fetch data from the backend
        fetch(ApiBaseUrl+'projects-highlights')
        .then(response => response.json())
        .then(data => {setWidgets(data.widgets);})
        .catch(error => {
        console.error('Error fetching data:', error);
        });

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };

    }, []);

    const gridContainerStyle = {
        maxWidth: '100vw',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        overflow: 'Scroll',
    };

    const gridGradientStyle = {
        width: "100%",
        height: "50px",
        borderRadius: '0 0 20px 20px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, #bbb 100%)',
        position: 'relative',
        top: '-45px',
        zIndex: '1',
    }
    const viewAllContainerStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
    const viewAllStyle = {

        color: '#000',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal'
    }
    return (
        <div id='grid-container' style={gridContainerStyle}>
            <ProjectCardsGrid widgets={widgets} windowWidth={windowWidth} />
            <div style={gridGradientStyle}>
                <div id='view-all-container' style={viewAllContainerStyle}>
                    <p style={viewAllStyle}>View all</p>
                </div>
            </div>
        </div>
    );
}


export default ProjectCardsContainer;
