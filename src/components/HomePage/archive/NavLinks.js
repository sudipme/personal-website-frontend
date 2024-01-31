import React from "react";

function redirectTo(link){window.location.href = link;}

function NavLink(props){
    return(
        <div className='nav-link' onClick={()=>redirectTo(props.link)}>{props.widgetTitle}</div>

    )
}

export default NavLink;