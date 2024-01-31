function HighlightsRow(props){
    const rowContainerStyle = {
        width: "900px",
        height: "40px",
        margin: "8px 0",
        display: "flex",
        borderRadius: "20px",
        border: "0.5px solid rgba(0, 0, 0, 0.1)",
        background: "#FFFFFF",
        filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.20))",
        cursor: "pointer",
    }
    const frontDesignStyle = {
        width: "30px",
        height: "40px",
        borderRadius: "20px 0px 0px 20px",
        border: "1px solid rgba(0, 0, 0, 0.10)",
        background: "#767676",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.20)",
    }
    const contentContainerStyle = {
        width: "80%",
        height: "40px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
    }
    const contentStyle = {
        color: "#000",
        fontFamily: "Open Sans",
        fontSize: "16px",
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

export default HighlightsRow;