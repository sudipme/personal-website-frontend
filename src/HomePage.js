import React, { useState, useEffect } from 'react';
import './HomePage.css';
import display_img from'./images/display-img.jpeg';
import instagram_logo from './images/icons/instagram_logo.svg'
import twitter_logo from './images/icons/twitter_logo.svg'
import linkedinLogo from './images/icons/linkedin-logo.svg'
import mediumLogo from './images/icons/medium-logo.svg'
import githubLogo from './images/icons/github-logo.svg'
import leetcodeLogo from './images/icons/leetcode-logo.png'
import codeforcesLogo from './images/icons/codeforces-transparent.png'
import codechefLogo from './images/icons/codechef-non-transparent.png'
import youtubeLogo from './images/icons/youtube-logo.svg'
export default function HomePage(){
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
                    <img id='display-img' src={display_img}></img>
                    <h1 id='my-name'>Sudip Halder</h1>
                    <p id='aboutme'>
                        Hi, I am Sudip.
                        <br></br>
                        Connect with me via twitter and LinkedIn.
                    </p>
                </div>
                <div id='nav-links-box'>
                    <NavLink linkTitle={"Projects"}/>
                    <NavLink linkTitle={"Blogs"}/>
                    <NavLink linkTitle={"Send a mail"}/>
                </div>
            </div>
        </div>
    )
}
function NavLink(props){
    return(
        <div className='nav-link'>{props.linkTitle}</div>
    )
}

function GetWindowWidth(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update window width
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add an event listener when the component mounts
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return windowWidth;


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

    const widgets = {
        w1:{
            size:'wide',
            startPosition:'1',
            color:'#E9F4FC',
            src:twitter_logo,
            linkTitle:"twitter",
            userId:"@sudiphl"

        }
    }
    return(
        <div id='widgets-panel'>
            <p id='widget-panel-heading'>Social links 🔗</p>
            
                <div id='widget-grid'>
                    { windowWidth < 1300 ?(
                        <>
                        <SmallWidget startPosition="1" color="#E9F4FC" src={twitter_logo} linkTitle="twitter" userId="@sudiphl"/>
                        <SmallWidget startPosition="2" color="#E9F4FC" src={linkedinLogo} linkTitle="LinkedIn" userId="@sudiphalder"/>

                        <SmallWidget startPosition="1" src={youtubeLogo} linkTitle="Youtube" userId="@sudip.halder"/>
                        <SmallWidget startPosition="2" src={instagram_logo} linkTitle="Instagram" userId="@sudiphl"/>

                        <WideWidget startPosition="1" src={mediumLogo} linkTitle="Medium" userId="@sudipme"/>

                        <WideWidget startPosition="1" src={githubLogo} linkTitle="GitHub" userId="@sudipme"/>

                        <WideWidget startPosition="1" src={codechefLogo} linkTitle="CodeChef" userId="@sudip_halder"/>

                        <SmallWidget startPosition="1" src={leetcodeLogo} linkTitle="LeetCode" userId="sudip_halder"/>
                        <SmallWidget startPosition="2" src={codeforcesLogo} linkTitle="CodeForces" userId="@Sudip_H"/>
                        </>
                    ):(
                       <>
                        <WideWidget startPosition="1" color="#E9F4FC" src={twitter_logo} linkTitle="twitter" userId="@sudiphl"/>
                        <SmallWidget startPosition="3" color="#E9F4FC" src={linkedinLogo} linkTitle="LinkedIn" userId="@sudiphalder"/>
                        <SmallWidget startPosition="4" src={youtubeLogo} linkTitle="Youtube" userId="@sudip.halder"/>

                        <SmallWidget startPosition="1" src={mediumLogo} linkTitle="Medium" userId="@sudipme"/>
                        <SmallWidget startPosition="2" src={instagram_logo} linkTitle="Instagram" userId="@sudiphl"/>
                        <WideWidget startPosition="3" src={githubLogo} linkTitle="GitHub" userId="@sudipme" />

                        <WideWidget startPosition="1" src={leetcodeLogo} linkTitle="LeetCode" userId="sudip_halder"/>
                        <SmallWidget startPosition="3" src={codeforcesLogo} linkTitle="CodeForces" userId="@Sudip_H"/>
                        <SmallWidget startPosition="4" src={codechefLogo} linkTitle="CodeChef" userId="@sudip_halder"/>
                        </>
                        
                    )}
                </div>

        </div>
    )
}

function SmallWidget(props){
    const style = {
        gridColumn: props.startPosition + "/" + "span 1",
        backgroundColor: props.color,
    }
    return(
        <div className='small-grid-item' id={props.id} style={style} >
            <div className='widget-icon-container'>
            <img className='widget-icon' src={props.src}></img>
            </div>
            <p className='widget-title'>{props.linkTitle}</p>
            <p className='widget-userid'>{props.userId}</p>
        </div>
    )
}

function WideWidget(props){
    const style = {
        gridColumn: props.startPosition + "/" + "span 2",
        backgroundColor: props.color,
    }
   
    return(
        <div className='wide-grid-item'style={style} >
            <div className='widget-icon-container'>
            <img className='widget-icon' src={props.src}></img>
            </div>
            <p className='widget-title'>{props.linkTitle}</p>
            <p className='widget-userid'>{props.userId}</p>
        </div>
    )
}


