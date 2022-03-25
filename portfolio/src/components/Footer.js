import React from 'react';
import '../App.css';

function Contact() {

    const topFunction = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    return (
        <div className="footer">
            <button className="backToTop" onClick={topFunction}>Back to Top</button>
        </div>
    )
}

export default Contact;