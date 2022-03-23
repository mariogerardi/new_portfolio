import React, { useState } from 'react';
import '../App.css';

function Projects() {
    return (
        <div 
            className="section">
            <h1 className="title">Projects</h1>
            <hr className="sectionDivider"/>
            <a>
                <div className="gradient">
                    <img className="tipsiLogo"
                        src={require('../assets/icon.png')}
                    />
                </div>
                <img 
                    className="tipsi"
                    src={require('../assets/tipsi.png')}
                />
            {/*             
                
            <img class="techIcon" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png" alt="">

            <img class="techIcon" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" alt="">

            <img class="techIcon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png" alt="">

            <img class="techIcon" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/jquery-512.png" alt="">

            <img class="techIcon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" alt="">

            <img class="techIcon" src="https://verbose-equals-true.gitlab.io/django-postgres-vue-gitlab-ecs/django.jpg" alt="">

            <img class="techIcon" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a0b9e371c09d15b9a0b48ed84b31ed35/mongodb-atlas.png" alt="">

            <img class="techIcon" src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="">

            REACT: <img class="techIcon" src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png" alt="">

            <img class="techIcon" src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/576/bootstrap-512.png" alt="">

            <img class="techIcon" src="https://tsed.io/mongoose.png" alt="">

            <img class="techIcon" src="https://reliutg.gallerycdn.vsassets.io/extensions/reliutg/bulma-css-class-completion/0.3.0/1637870206716/Microsoft.VisualStudio.Services.Icons.Default" alt="">

            <img class="techIcon" src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="">

            <img class="techIcon" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/137-Creativecloud_creative_cloud_CC_adobe-512.png" alt="">

            <img class="techIcon" src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/38cea/express-routing-logo.png" alt="">

            <img class="techIcon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png" alt="">

            <img class="techIcon" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png" alt="">

            <img class="techIcon" src="https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-heroku-512.png" alt="">

            <img class="techIcon" src="https://www.finaldraft.com/wp-content/uploads/2021/08/final-draft-12-logo.png" alt="">
            
            */}
                <div className="techIcons">
                    <div class="techIcon">
                        <img className="icon" src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png" alt=""/>
                        <p>React</p>
                    </div> 
                    <div class="techIcon">
                    <img class="icon" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2653673-2202669.png" alt=""/>
                        <p>JavaScript</p>
                    </div> 
                    <div class="techIcon">
                        <img class="icon" src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/38cea/express-routing-logo.png" alt=""/>
                        <p>Express</p>
                    </div> 
                    <div class="techIcon">
                        <img class="icon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png" alt=""/>
                        <p>Node.js</p>
                    </div> 
                    <div class="techIcon">
                        <img class="icon" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a0b9e371c09d15b9a0b48ed84b31ed35/mongodb-atlas.png" alt=""/>
                        <p>MongoDB</p>
                    </div> 
                    <div class="techIcon">
                        <img class="icon" src="https://tsed.io/mongoose.png" alt=""/>
                        <p>Mongoose</p>
                    </div> 
                </div>
                <div className="description">
                    <p>
                    <em>tipsi</em> is a mobile iOS application that allows users to create accounts and browse a large selection of cocktails, sourced from TheCocktailDb. Users can find recipes for any cocktail in the database, as well as share cocktails to a platform of their choosing.<br/><br/>
                    - Utilized MERN Stack (MongoDB, Express, React Native, Node) to build a mobile application compatible with iOS devices<br/><br/>
                    - Created a search component that queries an external API and live renders all cocktails in the database matching the query<br/><br/>
                    - Implemented a secure user authentication feature, using bcrypt to hash passwords on the backend server<br/><br/>
                    </p>
                </div>
            </a>
            <div>
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
            </div>
        </div>
    )
}

export default Projects;