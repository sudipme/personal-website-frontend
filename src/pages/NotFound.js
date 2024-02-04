import React from "react";
import '../css/NotFound.css'
import pageNotFoundImg from '../assets/page-not-found-img.png';
import {BaseUrl} from '../config'

function NotFound(){
    return(
        <div id="not-found-main-container">
            <img id="not-found-img" src={pageNotFoundImg} alt="404 not found illustration"></img>
            <h1 id="not-found-headline">Oops! Page Not in This Galaxy</h1>
            <p id="not-found-para" >Please check the link again.</p>
            <a id="home-link" href={BaseUrl}> ⬅ Back to home</a>
        </div>
    )
}

export default NotFound;