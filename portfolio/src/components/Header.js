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
    const [flip, setFlip] = useState(0)
    const [bounce, setBounce] = useState(0)
    const [spiral, setSpiral] = useState(0)
    const [up, setUp] = useState(0)
    const [down, setDown] = useState(0)
    const [mirror, setMirror] = useState(0)
    const [resume, setResume] = useState(0)
    const [superflip, setSuperflip] = useState(0)
    const [finale, setFinale] = useState(0)
    const [count, setCount] = useState(0)

    function makeMeSpin() {
        if (spin === 0) {
            setSpin(1);
            setToggle1(1);
            setCount(count+1)
        } else {
            setSpin(0);
            setToggle1(0);
            setCount(count-1)
        }
        counter();
    }

    function doTheWave() {
        if (wave === 0) {
            setWave(1);
            setToggle2(1);
            setCount(count+1)
        } else {
            setWave(0);
            setToggle2(0);
            setCount(count-1)
        }
        counter();
    }

    function moveIt() {
        if (migrate === 0) {
            setMigrate(1)
            setToggle3(1);
            setCount(count+1)
        } else {
            setMigrate(0);
            setToggle3(0);
            setCount(count-1)
        }
        counter();
    }

    function timeToStretch() {
        if (stretch === 0) {
            setStretch(1)
            setToggle4(1);
            setCount(count+1)
        } else {
            setStretch(0);
            setToggle4(0);
            setCount(count-1)
        }
        counter();
    }

    function doAFlip() {
        if (flip === 0) {
            setFlip(1)
            setToggle5(1);
            setCount(count+1)
        } else {
            setFlip(0);
            setToggle5(0);
            setCount(count-1)
        }
        counter();
    }

    function bouncyBois() {
        if (bounce === 0) {
            setBounce(1)
            setToggle6(1);
            setCount(count+1)
        } else {
            setBounce(0);
            setToggle6(0);
            setCount(count-1)
        }
        counter();
    }

    function spiralLikeMe() {
        if (spiral === 0) {
            setSpiral(1)
            setToggle7(1);
            setCount(count+1)
        } else {
            setSpiral(0);
            setToggle7(0);
            setCount(count-1)
        }
        counter();
    }

    function shiftInRhythm() {
        if (up === 0) {
            setUp(1)
            setDown(1)
            setToggle8(1);
            setCount(count+1)
        } else {
            setUp(0);
            setDown(0);
            setToggle8(0);
            setCount(count-1)
        }
        counter();
    }

    function reverseReverse() {
        if (mirror === 0) {
            setMirror(1)
            setToggle9(1);
            setCount(count+1)
        } else {
            setMirror(0);
            setToggle9(0);
            setCount(count-1)
        }
        counter();
    }

    function hireMeIDareYou() {
        if (resume === 0) {
            setResume(1)
            setToggle10(1);
            setCount(count+1)
        } else {
            setResume(0);
            setToggle10(0);
            setCount(count-1)
        }
        counter();
    }

    function flipButCooler() {
        if (superflip === 0) {
            setSuperflip(1)
            setToggle11(1);
            setCount(count+1)
        } else {
            setSuperflip(0);
            setToggle11(0);
            setCount(count-1)
        }
        counter();
    }

    function grandFinale() {
        if (finale === 0) {
            setFinale(1)
            setToggle12(1);
            setCount(count+1)
        } else {
            setFinale(0);
            setToggle12(0);
            setCount(count-1)
        }
        counter();
    }

    function counter() {
        if (count <= 11) {
            return (
                <img 
                    className="portrait"
                    src={require('../assets/avatar.png')}
                    spin={spin}
                />
            )
        } else {
            return (
                <img 
                    className="portrait"
                    src={require('../assets/avatar-gold.png')}
                    spin={spin}
                />
            )
        }
    }

    return (
        <div className="header">
            <div className="profile">
                {counter()}
            </div>
            <div 
                className="titleContainer" 
                wave={wave}>
                <button 
                    className="letter" 
                    id="start" 
                    onClick={makeMeSpin}
                    toggle={toggle1}
                    down={down}
                >
                    <h1 superflip={superflip}>M</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle2}
                    onClick={doTheWave}
                    up={up}
                >
                    <h1 spiral={spiral}>a</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle3}
                    onClick={moveIt}
                    flip={flip}
                >
                    <h1 superflip={superflip}>r</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle4}
                    onClick={timeToStretch}
                    down={down}
                    mirror={mirror}
                >
                    <h1 bounce={bounce}>i</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle5}
                    onClick={doAFlip}
                    up={up}
                >
                    <h1 spiral={spiral}>o</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle6}
                    onClick={bouncyBois}
                    flip={flip}
                >
                    <h1 finale={finale}>G</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle7}
                    onClick={spiralLikeMe}
                    down={down}
                >
                    <h1 spiral={spiral}>e</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle8}
                    onClick={shiftInRhythm}
                    up={up}
                >
                    <h1 superflip={superflip}>r</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle9}
                    onClick={reverseReverse}
                    mirror={mirror}
                >
                    <h1 spiral={spiral}>a</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle10}
                    up={up}
                    mirror={mirror}
                    onClick={hireMeIDareYou}
                >
                    <h1 superflip={superflip}>r</h1>
                </button>
                <button 
                    className="letter"
                    toggle={toggle11}
                    down={down}
                    onClick={flipButCooler}
                >
                    <h1>d</h1>
                </button>
                <button 
                    className="letter" 
                    id="end"
                    toggle={toggle12}
                    onClick={grandFinale}
                    finale={finale}
                >
                    <h1 bounce={bounce}>i</h1>
                </button>
            </div>
            <h2 className="migrate" migrate={migrate}><em>Front-End Developer | Filmmaker</em></h2>
            <h3 className="stretch" stretch={stretch}>Nice to meet you.</h3>
            <a className="resume" href={pdf} target="_blank" resume={resume} count={count}>Résumé</a>
        </div>
    );
}

export default Header;