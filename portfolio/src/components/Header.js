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
    
    const [toggle1, setToggle1] = useState(0)
    const [toggle2, setToggle2] = useState(0)
    const [toggle3, setToggle3] = useState(0)
    const [toggle4, setToggle4] = useState(0)
    const [toggle5, setToggle5] = useState(0)
    const [toggle6, setToggle6] = useState(0)
    const [toggle7, setToggle7] = useState(0)
    const [toggle8, setToggle8] = useState(0)
    const [toggle9, setToggle9] = useState(0)
    const [toggle10, setToggle10] = useState(0)
    const [toggle11, setToggle11] = useState(0)
    const [toggle12, setToggle12] = useState(0)

    const [spin, setSpin] = useState(0)
    const [wave, setWave] = useState(0)

    function makeMeSpin() {
        if (spin === 0) {
            setSpin(1);
            setToggle1(1);
        } else {
            setSpin(0);
            setToggle1(0);
        }
    }

    function doTheWave() {
        if (wave === 0) {
            setWave(1);
            setToggle2(1);
        } else {
            setWave(0);
            setToggle2(0);
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
            <div className="titleContainer" wave={wave}>
                <button 
                    className="letter" 
                    id="start" 
                    onClick={makeMeSpin}
                    toggle={toggle1}
                >
                    <h1>{letter1}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle2}
                    onClick={doTheWave}
                >
                    <h1>{letter2}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle3}
                >
                    <h1>{letter3}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle4}
                >
                    <h1>{letter4}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle5}
                >
                    <h1>{letter5}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle6}
                >
                    <h1>{letter6}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle7}
                >
                    <h1>{letter7}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle8}
                >
                    <h1>{letter8}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle9}
                >
                    <h1>{letter9}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle10}
                >
                    <h1>{letter10}</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle11}
                >
                    <h1>{letter11}</h1>
                </button>
                <button 
                    className="letter" 
                    id="end"
                    toggle={toggle12}
                >
                    <h1>{letter12}</h1>
                </button>
            </div>
        </div>
    );
}

export default Header;