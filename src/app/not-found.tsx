'use client';
import React, { useState, useEffect } from 'react';

import '@styles/NotFound.css'
import cursorImage from '@public/images/cute-cat.webp';

function NotFound() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="space-background">
            <div className="not-found-page-content">
                <h1>404</h1>
                <p>Oops! Looks like you're lost in space.</p>
                <a href="/" className="home-button">Return to Earth</a>
            </div>
            <div
                className="astronaut"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            >
                <img src={cursorImage.src} alt="cursor image of a cat" style={{width: '200px'}}/>
            </div>
            <div className="stars"></div>
        </div>
    )
}

export default NotFound;