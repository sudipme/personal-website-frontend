'use client';

import {CSSProperties, useState, useEffect } from 'react';
import NavBar from './NavBar';

function NavBarWrapper() {
    const [topbarPosition, setTopbarPosition] = useState("0");
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  
    useEffect(() => {
      const handleScroll = () => {
        let currentScrollY = window.scrollY;
        if (currentScrollY < 0) {
          currentScrollY = 0;
        }
        if (document.documentElement.scrollHeight === window.innerHeight) {
          setTopbarPosition("0");
        } else if (currentScrollY >= document.documentElement.scrollHeight - window.innerHeight) {
          setTopbarPosition("-60px");
        } else {
          setTopbarPosition(currentScrollY > lastScrollY ? "-60px" : "0");
        }
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);

    const containerStyle: CSSProperties = {
        position: "fixed",
        top: topbarPosition,
        width: "100vw",
        height: "60px",
        padding: "0px",
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "top 0.5s ease-in-out",
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        zIndex: 100,
      };


  return (
    <div style={containerStyle}>
      <NavBar />
    </div>
  );
}

export default NavBarWrapper;