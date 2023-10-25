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

function redirectTo(link){window.location.href = link;}

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
                    <NavLink widgetTitle={"Projects"}/>
                    <NavLink widgetTitle={"Blogs"}/>
                    <NavLink widgetTitle={"Send a mail"}/>
                </div>
            </div>
        </div>
    )
}
function NavLink(props){
    return(
        <div className='nav-link'>{props.widgetTitle}</div>
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

    const widgets = {
        w1:{
            size:'wide',
            startPosition:'1',
            color:'#E9F4FC',
            src:twitter_logo,
            widgetTitle:"twitter",
            userId:"@sudiphl"

        }
    }
    return(
        <div id='widgets-panel'>
            <p id='widget-panel-heading'>Social links 🔗</p>
            
                <div id='widget-grid'>
                    { windowWidth < 1300 ?(
                        <>
                        <SmallWidget link="https://x.com/sudiphl" startPosition="1" color="#E9F4FC" src={twitter_logo} widgetTitle="twitter" userId="@sudiphl"/>
                        <SmallWidget link="https://linkedin.com/in/sudiphalder" startPosition="2" color="#E9F4FC" src={linkedinLogo} widgetTitle="LinkedIn" userId="@sudiphalder"/>

                        <SmallWidget link="https://youtube.com/@sudip.halder" startPosition="1" src={youtubeLogo} widgetTitle="Youtube" userId="@sudip.halder"/>
                        <SmallWidget link="https://instagram.com/sudiphl" startPosition="2" src={instagram_logo} widgetTitle="Instagram" userId="@sudiphl"/>

                        <WideWidget link="https://sudipme.medium.com" startPosition="1" src={mediumLogo} widgetTitle="Medium" userId="@sudipme"/>

                        <WideWidget link="https://github.com/sudipme" startPosition="1" src={githubLogo} widgetTitle="GitHub" userId="@sudipme"/>

                        <WideWidget link="https://www.codechef.com/users/sudiphalder" startPosition="1" src={codechefLogo} widgetTitle="CodeChef" userId="@sudip_halder"/>

                        <SmallWidget link="https://leetcode.com/sudip_halder" startPosition="1" src={leetcodeLogo} widgetTitle="LeetCode" userId="sudip_halder"/>
                        <SmallWidget link="https://codeforces.com/profile/Sudip_H" startPosition="2" src={codeforcesLogo} widgetTitle="CodeForces" userId="@Sudip_H"/>
                        </>
                    ):(
                       <>
                        <WideWidget link="https://x.com/sudiphl" startPosition="1" color="#E9F4FC" src={twitter_logo} widgetTitle="twitter" userId="@sudiphl"/>
                        <SmallWidget link="https://linkedin.com/in/sudiphalder" startPosition="3" color="#E9F4FC" src={linkedinLogo} widgetTitle="LinkedIn" userId="@sudiphalder"/>
                        <SmallWidget link="https://youtube.com/@sudip.halder" startPosition="4" src={youtubeLogo} widgetTitle="Youtube" userId="@sudip.halder"/>

                        <SmallWidget link="https://sudipme.medium.com" startPosition="1" src={mediumLogo} widgetTitle="Medium" userId="@sudipme"/>
                        <SmallWidget link="https://instagram.com/sudiphl" startPosition="2" src={instagram_logo} widgetTitle="Instagram" userId="@sudiphl"/>
                        <WideWidget link="https://github.com/sudipme" startPosition="3" src={githubLogo} widgetTitle="GitHub" userId="@sudipme" />

                        <WideWidget link="https://leetcode.com/sudip_halder" startPosition="1" src={leetcodeLogo} widgetTitle="LeetCode" userId="sudip_halder"/>
                        <SmallWidget link="https://codeforces.com/profile/Sudip_H" startPosition="3" src={codeforcesLogo} widgetTitle="CodeForces" userId="@Sudip_H"/>
                        <SmallWidget link="https://www.codechef.com/users/sudiphalder" startPosition="4" src={codechefLogo} widgetTitle="CodeChef" userId="@sudip_halder"/>
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
        <div onClick={()=>redirectTo(props.link)} className='small-grid-item' id={props.id} style={style} >
            <div className='widget-icon-container'>
            <img className='widget-icon' src={props.src}></img>
            </div>
            <p className='widget-title'>{props.widgetTitle}</p>
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
        <div onClick={()=>redirectTo(props.link)} className='wide-grid-item'style={style} >
            <div className='widget-icon-container'>
            <img className='widget-icon' src={props.src}></img>
            </div>
            <p className='widget-title'>{props.widgetTitle}</p>
            <p className='widget-userid'>{props.userId}</p>
        </div>
    )
}


