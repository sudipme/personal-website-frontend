import SocialLinks from "./SocialLinks";


function TopBar() {
    const containerStyle = {
        width: "900px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const elementsContainerStyle = {
        width: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }

    const frontPartStyle = {
        width: "400px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
    
    const titleStyle = {
        color: "#000",
        fontFamily: "Montserrat",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }
    const topLineStyle = {
        width: "900px",
        height: "2px",
        background: "#0077B5",
    }
    return (
        <div id="top-bar-container" style={containerStyle} >
            <div id="top-bar-elemtns-container" style={elementsContainerStyle} >
                <h1 id="title-name" style={titleStyle}>Sudip Halder</h1>
                <SocialLinks />
            </div>
            <div id="top-line" style={topLineStyle}></div>
        </div>
    )
}

export default TopBar;
