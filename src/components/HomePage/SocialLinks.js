import SendMailLogo from "../../assets/icons/send-mail.svg"
import XLogo from "../../assets/icons/x-logo.svg"
import GithubLogo from "../../assets/icons/github-logo.svg"

function SocialLinks(){
    const containerStyle = {
        width: "200px",
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

export default SocialLinks;
