import "../../css/TopBar.css";
import SendMailLogo from "../../assets/icons/send-mail.svg"
import XLogo from "../../assets/icons/x-logo.svg"
import GithubLogo from "../../assets/icons/github-logo.svg"


function TopBar() {
    const containerStyle = {
        width: "100vw",
        padding:"0px",
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const elementsContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }

    
    const titleStyle = {
        color: "#000",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }
    const topLineStyle = {
        height: "2px",
        background: "#888", //#0077B5
    }
    return (
        <div id="top-bar-container" style={containerStyle} >
            <div id="top-bar-elements-container" style={elementsContainerStyle} >
                <h1 id="top-bar-title" style={titleStyle}>Sudip Halder</h1>
                <SocialLinks />
            </div>
            <div id="top-line" style={topLineStyle}></div>
        </div>
    )
}

function SocialLinks(){
    const containerStyle = {
        height: "40px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    }
    const iconStyle = {
        height: "30px",
        cursor: "pointer",
    }
    return(
        <div id="links-container" style={containerStyle}>
            <img src={SendMailLogo} style={iconStyle} onClick={() => window.open("https://sudip.me/mail", '_blank')}></img>
            <img src={XLogo} style={iconStyle} onClick={() => window.open("https://x.com/sudiphl", '_blank')}></img>
            <img src={GithubLogo} style={iconStyle} onClick={() => window.open("https://github.com/sudipme", '_blank')}></img>
        </div>
    )
}

export default TopBar;
