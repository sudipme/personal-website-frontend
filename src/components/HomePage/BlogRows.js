function BlogsRow(props){
    const blogRowContainerStyle = {
        width: "80vw",
        height: "200px",
        overflow: "scroll",
        cursor: "pointer",
    }
    const blogTitleStyle = {
        textAlign: "left",
        color: "#FFF",
        fontFamily: "Exo",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }
    const blogDescriptionStyle = {
        width: "80vw",
        textAlign: "left",
        color: "#FFF",
        fontFamily: "Exo 2",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const blogLineBreakerStyle = {
        position: "relative",
        left: "-10vw",
        width: "100vw",
        height: "1px",
        marginTop: "20px",
        backgroundColor: "#FFF",
    }
    return (
        <div id="blogs-row-container" style={blogRowContainerStyle} onClick={() => window.open(props.link, '_blank')}>
            <h2 id="blog-title" style={blogTitleStyle}>{props.title}</h2>
            <h3 id="blog-description" style={blogDescriptionStyle}>{props.description}</h3>
            
        </div>
    )
}

export default BlogsRow;