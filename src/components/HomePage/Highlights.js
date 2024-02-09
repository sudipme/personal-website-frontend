import { useEffect, useState } from 'react';
import '../../css/HighlightsRow.css';
import { ApiBaseUrl } from '../../config';
import LoadingAnimation from '../LoadingAnimation';

function HighlightsRow(props){
    const rowContainerStyle = {
        margin: "8px 0",
        display: "flex",
        borderRadius: "10px",
        border: "0.5px solid rgba(0, 0, 0, 0.1)",
        background: "#FFFFFF",
        filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.20))",
        cursor: "pointer",
    }
    const frontDesignStyle = {
        width: "10px",
        borderRadius: "10px 0px 0px 10px",
        border: "1px solid rgba(0, 0, 0, 0.10)",
        background: "#767676",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.20)",
    }
    const contentContainerStyle = {
        minHeight: "40px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
    }
    const contentStyle = {
        margin: "5px 0",
        color: "#000",
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
    }
    return(
        <div id="row-container" style={rowContainerStyle} onClick={() => window.open(props.link, '_blank')}>
            <div id="front-design" style={frontDesignStyle}></div>
            <div id="content-container" style={contentContainerStyle}>
                <p id="content" style={contentStyle}>{props.content}</p>
            </div>
        </div>
    )
}

function Highlights(props){
    const [highlights, setHighlights] =useState(null);
    useEffect(()=>{
        fetch(ApiBaseUrl + "highlights")
        .then(response => response.json())
        .then(data => setHighlights(data.highlights))
        .catch(error => console.error('Error fetching data:', error))
    },[]);
    
    useEffect(()=>{
        if(highlights!==null){props.componentLoaded();}
    },[highlights])

    return(
        <>
            { 
            highlights === null ? <LoadingAnimation/> :
            Object.keys(highlights).map((key) => {
                return(
                    <HighlightsRow key={highlights[key].time_stamp} content={highlights[key].content} link={highlights[key].link}/>
                )
            })
            }
        </>
    )
}

export default Highlights;