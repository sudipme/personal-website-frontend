import PersonIcon from "../../assets/icons/person-icon.svg";

function LoginButton(){
    const containerStyle = {
        width: "130px",
        height: "40px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "20px",
        background: "#FFF",
        boxShadow: "0px 0px 8.6px 0px rgba(0, 0, 0, 0.25)",
    }
    const textStyle = {
        color: "#000",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const iconStyle = {
        width: "20px",
        height: "20px",
        fill: "rgba(0, 0, 0, 0.45)",
    }
    return(
        <div id="login-button-container" style={containerStyle}>
            <p style={textStyle}>Log in</p>
            <img src={PersonIcon} style={iconStyle}></img>
        </div>
    )
}

export default LoginButton;