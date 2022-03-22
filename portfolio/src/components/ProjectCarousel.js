import React, { useState } from 'react';
import '../App.css';

function Projects() {
    return (
        <div className="projectCarousel">
            <a>
                <img 
                    className="tipsi"
                    src={require('../assets/tipsi.png')}
                />
            </a>
            <a>
                <img 
                    className="tipsi"
                    src={require('../assets/FumblrHome.png')}
                />
            </a>
            <a>
                <img 
                    className="tipsi"
                    src={require('../assets/FumblrDashboard.png')}
                />
            </a>
        </div>
    )
}

export default Projects;