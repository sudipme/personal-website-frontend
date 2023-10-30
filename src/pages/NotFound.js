import React from "react";
import NavLink from "../components/HomePage/NavLinks";
import '../css/NotFound.css'
import pageNotFoundImg from '../images/page-not-found-img.png';

function NotFound(){
    return(
        <div id="main-container">
            <img id="not-found-img" src={pageNotFoundImg}></img>
            <h1 id="not-found-headline">Oops! Page Not in This Galaxy</h1>
            <p id="not-found-para" >Please check the link again.</p>
            <a id="home-link" href="https://sudip.me"> ⬅ Back to home</a>
        </div>
    )
}

export default NotFound;