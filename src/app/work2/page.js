'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./work2.css"
function Work2() {
    const transitionRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();

        tl.set(transitionRef.current, {
            scale: 200,
            x: '100%',
            y: '100%',
            backgroundColor: 'aquamarine',
        })
        .to(transitionRef.current, {
            duration: 1,
            x: '0%',
            y: '0%',
            rotation: 360,
            ease: 'power3.out',
        })
        .to(transitionRef.current, {
            duration: 1,
            scale: 0,
            ease: 'power3.out',
        });
    }, []);

    return (
        <>
            <div>
                <div className="transition2" ref={transitionRef}>
                </div>

                <div className="work2Back">
                    <div className="workTitle" data-aos="fade-down-right">
                        <text className="workTextTitle">Body Worn Camera Automated Testing</text>
                    </div>

                    <div className="content" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className="workSubtitle">
                            <text className="workTextSubtitle">技術簡介</text>
                        </div>
                        <div className="workH2Text">
                            <h2>This is a multi-line spanning animated underline. This took an annoyingly long time to figure out.</h2>
                        </div>
                    </div>
                    {/* <button className="nextPageButton" onClick={handleNextPageClick}>➡️</button> */}
                </div>
            </div>
        </>
    );
}

export default Work2