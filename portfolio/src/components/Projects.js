import React, { useState } from 'react';
import '../App.css';

function Projects() {
    return (
        <div
            className="section">
            <h1 className="title">Projects</h1>
            <a>
                <div className='infobox'>
                    <div className="gradient">
                        <img className="tipsiLogo"
                            src={require('../assets/icon.png')}
                        />
                        <div className="techIcons">
                            <div className="techIcon">
                                <img className="icon" src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png" alt="" />
                                <p>React</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2653673-2202669.png" alt="" />
                                <p>JavaScript</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/38cea/express-routing-logo.png" alt="" />
                                <p>Express</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png" alt="" />
                                <p>Node.js</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a0b9e371c09d15b9a0b48ed84b31ed35/mongodb-atlas.png" alt="" />
                                <p>MongoDB</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://tsed.io/mongoose.png" alt="" />
                                <p>Mongoose</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="tipsi"
                    src={require('../assets/tipsi.png')}
                />
                
                <div className="description">
                    <p>
                        <em>tipsi</em> is a mobile iOS application that allows users to create accounts and browse a large selection of cocktails, sourced from TheCocktailDb. Users can find recipes for any cocktail in the database, as well as share cocktails to a platform of their choosing.<br /><br />
                        For this project, I chose to utilize the MERN Stack (MongoDB, Express, React Native, Node) to build a mobile application compatible with iOS devices.
                        I created a search component that queries an external API and live renders all cocktails in the database matching the query, as well as implemented a secure user authentication feature, using bcrypt to hash passwords on the backend server.<br />
                    </p>
                </div>
                <div className="checkItOut">
                    <h2>Check it out here: </h2>
                    <a href="https://github.com/mariogerardi/tipsi" target="_blank">
                        <img className="contactLink" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png" alt="" />
                    </a>
                    <br/><br/>
                </div>
            </a>
            <div>
                <div className="gradient">
                    <img className="fumblrLogo"
                        src={require('../assets/fumblrlogo.png')}
                    />
                    <div className="techIcons">
                        <div className="techIcon">
                            <img className="icon" src="https://logoeps.com/wp-content/uploads/2014/01/23735-html-5-logo-icon-vector-icon-vector-eps.png" alt="" />
                            <p>HTML5</p>
                        </div>
                        <div className="techIcon">
                            <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/640px-Devicon-css3-plain.svg.png" alt="" />
                            <p>CSS3</p>
                        </div>
                        <div className="techIcon">
                            <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2653673-2202669.png" alt="" />
                            <p>JavaScript</p>
                        </div>
                        <div className="techIcon">
                            <img className="icon" src="https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png" alt="" />
                            <p>jQuery</p>
                        </div>
                        <div className="techIcon">
                            <img className="icon" src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/38cea/express-routing-logo.png" alt="" />
                            <p>Express</p>
                        </div>
                        <div className="techIcon">
                            <img className="icon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png" alt="" />
                            <p>Node.js</p>
                        </div>
                        <div className="techIcon">
                            <img className="icon" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a0b9e371c09d15b9a0b48ed84b31ed35/mongodb-atlas.png" alt="" />
                            <p>MongoDB</p>
                        </div>
                        <div className="techIcon">
                            <img className="icon" src="https://tsed.io/mongoose.png" alt="" />
                            <p>Mongoose</p>
                        </div>
                    </div>
                </div>
                <a>
                    <img
                        className="fumblrleft"
                        src={require('../assets/FumblrHome.png')}
                    />
                </a>
                <a>
                    <img
                        className="fumblrright"
                        src={require('../assets/FumblrDashboard.png')}
                    />
                </a>
                <div className="description">
                    <p>
                        <em>fumblr</em> is a RESTful MEN-stack
                        application that reimagines the user interface of popular blog-hosting
                        website tumblr, in an attempt to modernize the website's design while
                        paying homage to the distinct traditional tumblr look. The site allows
                        users to create an account and log into that account, as well as create
                        blogs and post seven different types of posts to their blogs. Each of
                        these features has full CRUD functionality.<br /><br />
                        In working on <em>fumblr</em>, I collaborated with a team of developers.
                        I oversaw the front-end portion of the project, including but not limited to CSS styling and EJS files.
                        I chose to design the website exclusively with CSS, utilizing conditional logic to render styles and images throughout.
                    </p>
                </div>
                <div className="checkItOut">
                    <h2>Check it out here: </h2>
                    <a href="https://github.com/mariogerardi/fumblr" target="_blank">
                        <img className="contactLink" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png" alt="" />
                    </a>&emsp;
                    <a href="https://secure-shelf-80229.herokuapp.com/fumblr" target="_blank">
                        <img className="contactLink" src="https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-heroku-512.png" alt="" />
                    </a>
                </div>
                <br/>
                <div>
                    <div className="gradient">
                        <h1 className='cheeseAppTitle'>Cheese App</h1>
                        <img className="cheeseAppLogo"
                            src='https://cdn.iconscout.com/icon/free/png-256/cheese-1616900-1371045.png'
                        />
                        <div className="techIcons">
                            <div className="techIcon">
                                <img className="icon" src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png" alt="" />
                                <p>React</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/640px-Devicon-css3-plain.svg.png" alt="" />
                                <p>CSS3</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" alt="" />
                                <p>Sass</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2653673-2202669.png" alt="" />
                                <p>JavaScript</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/38cea/express-routing-logo.png" alt="" />
                                <p>Express</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png" alt="" />
                                <p>Node.js</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a0b9e371c09d15b9a0b48ed84b31ed35/mongodb-atlas.png" alt="" />
                                <p>MongoDB</p>
                            </div>
                            <div className="techIcon">
                                <img className="icon" src="https://tsed.io/mongoose.png" alt="" />
                                <p>Mongoose</p>
                            </div>
                        </div>
                    </div>
                    <a>
                        <img
                            className="fumblrleft"
                            src={require('../assets/CheeseShow.png')}
                        />
                    </a>
                    <a>
                        <img
                            className="fumblrright"
                            src={require('../assets/CheeseApp.png')}
                        />
                    </a>
                    <div className="description">
                        <p>
                            <em>Cheese App</em> is the first MERN-stack project I've created. 
                            In <em>Cheese App,</em> anyone can add their favorite cheese, along with a photo of the cheese and the
                            cheese's country of origin, to a remote database I have set up, as well as update and delete existing
                            cheeses. Server-side Cheese app is deployed on Heroku, while the front-end lives on Netlify.<br />
                        </p>
                    </div>
                    <div className="checkItOut">
                        <h2>Check it out here: </h2>
                        <a href="https://github.com/mariogerardi/cheese-app-frontend" target="_blank">
                            <img className="contactLink" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png" alt="" />
                        </a>&emsp;
                        <a href="https://cheese-collection-app.netlify.app/" target="_blank">
                            <img className="contactLink" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;