import React, { useState } from 'react';
import pdf from '../assets/gerardiresume.pdf'
import '../App.css';

function Header() {
    
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
    const [migrate, setMigrate] = useState(0)
    const [stretch, setStretch] = useState(0)

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

    function moveIt() {
        if (migrate === 0) {
            setMigrate(1)
            setToggle3(1);
        } else {
            setMigrate(0);
            setToggle3(0);
        }
    }

    function timeToStretch() {
        if (stretch === 0) {
            setStretch(1)
            setToggle4(1);
        } else {
            setStretch(0);
            setToggle4(0);
        }
    }

    return (
        <div className="header">
            <div className="profile">
                <img 
                    className="portrait"
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
                    <h1>M</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle2}
                    onClick={doTheWave}
                >
                    <h1>a</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle3}
                    onClick={moveIt}
                >
                    <h1>r</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle4}
                    onClick={timeToStretch}
                >
                    <h1>i</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle5}
                >
                    <h1>o</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle6}
                >
                    <h1>G</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle7}
                >
                    <h1>e</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle8}
                >
                    <h1>r</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle9}
                >
                    <h1>a</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle10}
                >
                    <h1>r</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle11}
                >
                    <h1>d</h1>
                </button>
                <button 
                    className="letter" 
                    id="end"
                    toggle={toggle12}
                >
                    <h1>i</h1>
                </button>
            </div>
            <h2 className="migrate" migrate={migrate}>Front-End Developer | Filmmaker</h2>
            <h3 className="stretch" stretch={stretch}>Nice to meet you.</h3>
            <a className="resume" href={pdf} target="_blank">Résumé</a>
        </div>
    );
}

export default Header;