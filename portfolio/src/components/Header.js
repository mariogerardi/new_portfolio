import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className="header">
            <div className="profile">
                <img className="portrait" src={require('../assets/portrait.png')}/>
            </div>
            <div className="titleContainer">
                <h1 className="letter" id="start">M</h1>
                <h1 className="letter">a</h1>
                <h1 className="letter">r</h1>
                <h1 className="letter">i</h1>
                <h1 className="letter">o</h1>
                <h1 className="letter">G</h1>
                <h1 className="letter">e</h1>
                <h1 className="letter">r</h1>
                <h1 className="letter">a</h1>
                <h1 className="letter">r</h1>
                <h1 className="letter">d</h1>
                <h1 className="letter" id="end">i</h1>
            </div>
        </div>
    );
}

export default Header;