'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import "./page2.css"
import { gsap } from 'gsap';
import Schedule from '../Schedule/Schedule';
function Page2() {
    const [buttonClicked, setButtonClicked] = useState([false, false, false, false, false, false]);
    const [isPageBack, setIsPageBack] = useState(false);
    const walk1Ref = useRef();
    const walk2Ref = useRef();
    const sunRef = useRef();
    const handleClick = (index) => {
        const newButtonClicked = [...buttonClicked];
        newButtonClicked[index] = true;
        setButtonClicked(newButtonClicked);
        setIsPageBack(true);
        setTimeout(() => {
            newButtonClicked[index] = false;
            setButtonClicked(newButtonClicked);
        }, 1500);
    }
    useEffect(() => {
        const tl = gsap.timeline();

        tl.set(sunRef.current, {
            y: '-100%',
        })
            .to(sunRef.current, {
                duration: 1.5,
                y: '10%',
                ease: 'bounce.out',
            });
    }, []);
    useEffect(() => {

        const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
        tl1.to(walk1Ref.current, { opacity: 1, duration: 0.2 })
            .to(walk1Ref.current, { opacity: 0, duration: 0.1 });

        const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
        tl2.to(walk2Ref.current, { opacity: 0, duration: 0.2 })
            .to(walk2Ref.current, { opacity: 1, duration: 0.1 });
    }, []);

    return (
        <><div>
            <div className='sun' ref={sunRef}>
                <img src="sun.png" alt="Sun" />
            </div>
            <div className="pageBack">
                <div className="schedule">
                    <Schedule />
                </div>
                <div className={`switching-overlay ${isPageBack ? 'show' : 'hide'}`}></div>
                <ul>
                    <li key={1}>
                        <Link href="/work">
                            <div className={`menuButton ${buttonClicked[0] ? 'clicked' : ''}`}
                                onClick={() => handleClick(0)}>
                                作品展示
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </Link>
                    </li>
                    <li key={2}>
                        <Link href="/Effectiveness">
                            <div className={`menuButton ${buttonClicked[1] ? 'clicked' : ''}`}
                                onClick={() => handleClick(1)}>
                                成效評估
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </Link>
                    </li>
                    <li key={3}>
                        <Link href="/Methods">
                            <div className={`menuButton ${buttonClicked[2] ? 'clicked' : ''}`}
                                onClick={() => handleClick(2)}>
                                方法
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </Link>
                    </li>
                    <li key={4}>
                        <Link href="/Extension">
                            <div className={`menuButton ${buttonClicked[3] ? 'clicked' : ''}`}
                                onClick={() => handleClick(3)}>
                                系統延展
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </Link>
                    </li>
                    <li key={5}>
                        <Link href="/thanks">
                            <div className={`menuButton ${buttonClicked[4] ? 'clicked' : ''}`}
                                onClick={() => handleClick(4)}>
                                總結與感謝
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </Link>
                    </li>
                </ul>

            </div>
            {/* <div className='walk'>
                <div className="walk1" ref={walk1Ref}>
                    <img src="/walk1.png" alt="Image 1" />
                </div>
                <div className="walk2" ref={walk2Ref}>
                    <img src="/walk2.png" alt="Image 2" />
                </div>
            </div> */}
        </div>
        </>
    );
}

export default Page2;