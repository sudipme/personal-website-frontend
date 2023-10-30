import React, { useState, useEffect } from 'react';

import {SmallWidget, WideWidget} from '../components/HomePage/LinkWidgets';
import NavLink from '../components/HomePage/NavLinks';

import '../css/HomePage.css';

import displayImg from'../images/my-image.jpeg';
import instagramLogo from '../images/icons/instagram-logo.svg';
import twitter_logo from '../images/icons/twitter_logo.svg';
import linkedinLogo from '../images/icons/linkedin-logo.svg';
import mediumLogo from '../images/icons/medium-logo.svg';
import githubLogo from '../images/icons/github-logo.svg';
import leetcodeLogo from '../images/icons/leetcode-logo.png';
import codeforcesLogo from '../images/icons/codeforces-transparent.png';
import codechefLogo from '../images/icons/codechef-non-transparent.png';
import youtubeLogo from '../images/icons/youtube-logo.svg';


function HomePage(){
    return(
        <div id='home-page'>
        <AboutMePanel/>
        <WidgetsPanel/>
        </div>
    )
}

function AboutMePanel(){
    return(
        <div id='aboutme-panel'>
            <div id='aboutme-box'>
                <div id='my-intro-box'>
                    <img id='display-img' src={displayImg} alt='sudip halder'></img>
                    <h1 id='my-name'>Sudip Halder</h1>
                    <p id='aboutme'>
                        Hi, I am Sudip.
                        <br></br>
                        Connect with me via twitter and LinkedIn.
                    </p>
                </div>
                <div id='nav-links-box'>
                    <NavLink widgetTitle={"Projects"} link="https://sudip.me/projects"/>
                    <NavLink widgetTitle={"Blogs"} link="https://sudipme.medium.com"/>
                    <NavLink widgetTitle={"Send a mail"} link="https://sudip.me/mail" />
                </div>
            </div>
        </div>
    )
}

function WidgetsPanel(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };
      useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', updateWindowWidth);
        };
      }, []);

    return(
        <div id='widgets-panel'>
            <p id='widget-panel-heading'>Social links 🔗</p>
                <div id='widget-grid'>
                    {
                        Object.keys(widgets).map((widgetKey) => {
                            const widget = widgets[widgetKey];
                            let position=widget.position;
                            let size = widget.size;
                            if(windowWidth < 1300){
                                position=widget.mPosition;
                                size=widget.mSize
                            }
                            if(size==="small"){
                                return(
                                    <SmallWidget 
                                    key={widget.title}
                                    link={widget.link} 
                                    startPosition={position}
                                    color={widget.color} 
                                    src={widget.icon} 
                                    widgetTitle={widget.title}
                                    userId={widget.userId}/>
                                    );
                            }else if(size==="wide"){
                                return(
                                    <WideWidget 
                                    key={widget.title}
                                    link={widget.link} 
                                    startPosition={position}
                                    color={widget.color} 
                                    src={widget.icon} 
                                    widgetTitle={widget.title}
                                    userId={widget.userId}/>
                                    );
                            }
                            return(null);                            
                        }   
                    )}   
                </div>
        </div>
    )
}

let widgets = {
    twitter:{
        size:"wide",
        mSize:"small",
        position:1,
        mPosition:1,
        color:"#E9F4FC",
        link:"https://x.com/sudiphl",
        icon:twitter_logo,
        title:"twitter",
        userId:"@sudiphl",
    },
    linkedin:{
        size:"small",
        mSize:"small",
        position:3,
        mPosition:2,
        color:"#E9F4FC",
        link:"https://linkedin.com/in/sudiphalder",
        icon:linkedinLogo,
        title:"LinkedIn",
        userId:"@sudiphalder",
    },
    youtube:{
        size:"small",
        mSize:"small",
        position:4,
        mPosition:1,
        color:"#FFFFFF",
        link:"https://youtube.com/@sudip.halder",
        icon:youtubeLogo,
        title:"Youtube",
        userId:"@sudip.halder",
    },
    medium:{
        size:"small",
        mSize:"wide",
        position:1,
        mPosition:1,
        color:"#FFFFFF",
        link:"https://sudipme.medium.com",
        icon:mediumLogo,
        title:"Medium",
        userId:"@sudipme",
    },
    instagram:{
        size:"small",
        mSize:"small",
        position:2,
        mPosition:2,
        color:"#FFFFFF",
        link:"https://instagram.com/sudiphl",
        icon:instagramLogo,
        title:"Instagram",
        userId:"@sudiphl",
    },
    github:{
        size:"wide",
        mSize:"wide",
        position:3,
        mPosition:1,
        color:"#FFFFFF",
        link:"https://github.com/sudipme",
        icon:githubLogo,
        title:"GitHub",
        userId:"@sudipme",
    },
    codechef:{
        size:"wide",
        mSize:"wide",
        position:1,
        mPosition:1,
        color:"#FFFFFF",
        link:"https://codechef.com/users/sudiphalder",
        icon:codechefLogo,
        title:"CodeChef",
        userId:"@sudihalder",
    },
    leetcode:{
        size:"small",
        mSize:"small",
        position:3,
        mPosition:1,
        color:"#FFFFFF",
        link:"https://leetcode.com/sudip_halder",
        icon:leetcodeLogo,
        title:"Leetcode",
        userId:"@sudip_halder",
    },
    codeforces:{
        size:"small",
        mSize:"small",
        position:4,
        mPosition:2,
        color:"#FFFFFF",
        link:"https://codeforces.com/profile/Sudip_H",
        icon:codeforcesLogo,
        title:"CodeForces",
        userId:"@sudip_H",
    }

}

export default HomePage;