import React from 'react';
import '../App.css';

function Contact() {
    return (
        <div className="section">
            <h1 className="title">Contact Me</h1>
            <hr className="sectionDivider" />
            <div className="aboutBlock">
                <img className="me" src={require('../assets/me.png')} />
                <div className="body">
                    <h2>I'm always happy to connect!</h2>
                    <h3>Find me on any of these platforms:</h3>
                    <div className='links'>
                        <a className="contactLinkBox" href="mailto:mario.d.gerardi@gmail.com">
                            <h5>Email</h5><img className="contactLink" src="https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_mail-256.png" />
                        </a>
                        <a className="contactLinkBox" href="https://github.com/mariogerardi/" target="_blank">
                            <h5>GitHub</h5><img className="contactLink" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png" />
                        </a>
                        <a className="contactLinkBox" href="https://www.linkedin.com/in/mario-gerardi/" target="_blank">
                            <h5>GitHub</h5><img className="contactLink" src="https://cdn1.iconfinder.com/data/icons/capsocial/500/linkedin2-256.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;