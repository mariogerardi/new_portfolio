import React from 'react';
import '../App.css';

function About() {
    return (
        <div className="section">
            <h1 className="title">About</h1>
            <div className="aboutBlock">
                <img className="me" src={require('../assets/me.png')}/>
                <div className="body">
                    <h4>I'm a first-generation student with a passion for creation.</h4>
                    <p>During my time at Vassar College, I majored in Film Studies, focusing mainly
                        on screenwriting and film production. Post-graduation, I developed an interest in web development and 
                        completed an immersive course in Software Engineering through General Assembly. 
                    </p>
                    <h4>As a developer, I aim to integrate responsiveness, intuitive functionality, and a seamless user experience into the software and web applications I create.</h4>
                    <p>My background in videography and screenwriting informs my approach to problem 
                        solving, using logic and storytelling to inform the user experience, and vice versa. I believe that 
                        structure and rhythm are essential in design, but I won't hesitate to break from tradition in search 
                        of an elegant solution.
                    </p>
                    <h4>Want to know more about me?</h4>
                    <p>I love video games and creating music. I am a Maine transplant, currently residing 
                        in the NYC area, missing the wilderness but loving the city life. I love coffee, hiking, and spending time with friends and family.
                    </p>
                    <h4 className="aboutLinks">Check out my projects below, or <a href="mailto:mario.d.gerardi@gmail.com">contact me!</a></h4>
                </div>
            </div>
        </div>
    )
}

export default About;