import React, { useState, useEffect } from 'react';
function WideWidget(props){
    const containerStyle = {
        width: '390px',
        height: '175px',
        borderRadius: '20px',
        border: '0.5px solid rgba(0, 0, 0, 0.1)',
        background: '#FFFFFF',
        filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.20))',
    }
    const titleStyle = {
        textAlign: 'left',
        marginLeft: "40px",
        color: '#000',
        fontFamily: 'Exo, sans-serif',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal'
    }
    const descriptionStyle = {
        width: "329px",
        height: "85px",
        marginLeft: "40px",
        textAlign: 'left',
        color: '#000',
        fontFamily: 'Exo, sans-serif',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
    }
   
    return(
        <div className='wide-grid-item' style={containerStyle} >
            <h3 id="project-title" style={titleStyle}>{props.title}</h3>
            <p id="project-desctiption" style={descriptionStyle}>{props.description}</p>
        </div>
    )
}

function ProjectCardsGrid(props) {
    const gridStyle = {
        width: '800px',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridTemplateRows: 'auto auto auto',
        gridAutoFlow: 'column',
        rowGap: '20px',
        columnGap: '20px'
    };

    return (
        <div id='grid' style={gridStyle}>
            {
                Object.keys(props.widgets).map((widgetKey) => {
                    const widget = props.widgets[widgetKey];
                    let position = widget.position;
                    let size = widget.size;
                    if (props.windowWidth < 1300) {
                        position = widget.mPosition;
                        size = widget.mSize
                    }
                    return (
                        <WideWidget
                            key={widget.id}
                            link={widget.link}
                            startPosition={position}
                            title={widget.title}
                            description={widget.description}
                        />
                    );
                }
                )}
        </div>
    )
}

function ProjectCardsContainer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    const gridContainerStyle = {
        width: '800px',
        maxWidth: '800px',
        maxHeight: '575px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
    };

    const gridGradientStyle = {
        width: "803px",
        height: "175px",
        borderRadius: '20px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, #0077B5 100%)',
        position: 'relative',
        top: '-175px',
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
        testAlign: 'center',
        color: '#FFF',
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
    )
}


let widgets = {
    '1': {
        id:1,
        title: 'Price Optimization Engine',
        description: 'Give the sellers of any ecommerce platform accurate pricing estimation for maximum Profitability',
        position: 1,
    },
    '2': {
        id:2,
        title: 'Price Optimization Engine',
        description: 'Give the sellers of any ecommerce platform accurate pricing estimation for maximum Profitability',
        position: 2,
    },
    '3': {
        id:3,
        title: 'Price Optimization Engine',
        description: 'Give the sellers of any ecommerce platform accurate pricing estimation for maximum Profitability',
        position: 2,
    },
    '4': {
        id:4,
        title: 'Price Optimization Engine',
        description: 'Give the sellers of any ecommerce platform accurate pricing estimation for maximum Profitability',
        position: 2,
    },
    '5': {
        id:5,
        title: 'Price Optimization Engine',
        description: 'Give the sellers of any ecommerce platform accurate pricing estimation for maximum Profitability',
        position: 2,
    },
    '6': {
        id:6,
        title: 'Price Optimization Engine',
        description: 'Give the sellers of any ecommerce platform accurate pricing estimation for maximum Profitability',
        position: 2,
    },
}

/*
let widget1 = {};

fetch('http://localhost:8000/api/projects-highlights')
    .then(response => response.json())
    .then(data => {
        widgets = data;
        console.log("hello")
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    */
export default ProjectCardsContainer;
