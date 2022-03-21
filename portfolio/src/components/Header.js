import React, { useState } from 'react';
import '../App.css';

function Header() {

    const [letter1, setLetter1] = useState("M")
    const [letter2, setLetter2] = useState("a")
    const [letter3, setLetter3] = useState("r")
    const [letter4, setLetter4] = useState("i")
    const [letter5, setLetter5] = useState("o")
    const [letter6, setLetter6] = useState("G")
    const [letter7, setLetter7] = useState("e")
    const [letter8, setLetter8] = useState("r")
    const [letter9, setLetter9] = useState("a")
    const [letter10, setLetter10] = useState("r")
    const [letter11, setLetter11] = useState("d")
    const [letter12, setLetter12] = useState("i")

    const [spin, setSpin] = useState(0)

    const [toggle, setToggle] = useState(0)

    function makeMeSpin() {
        toggleColor();
        if (spin === 0) {
            setSpin(1);
        } else {
            setSpin(0);
        }
    }

    function toggleColor() {
        if (toggle === 0) {
            setToggle(1)
        } else {
            setToggle(0)
        }
    }

    return (
        <div className="header">
            <div className="profile">
                <img 
                    className={"portrait"} 
                    src={require('../assets/portrait.png')}
                    spin={spin}
                />
            </div>
            <div className="titleContainer">
                <button className="letter" id="start" toggle={toggle} onClick={makeMeSpin}>
                    <h1>{letter1}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter2}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter3}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter4}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter5}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter6}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter7}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter8}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter9}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter10}</h1>
                </button>
                <button className="letter" toggle={toggle}>
                    <h1>{letter11}</h1>
                </button>
                <button className="letter" id="end" toggle={toggle}>
                    <h1>{letter12}</h1>
                </button>
            </div>
        </div>
    );
}

export default Header;