'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./work3.css"
function Work3() {
    // const transitionRef = useRef();

    // useEffect(() => {
    //     const tl = gsap.timeline();

    //     tl.set(transitionRef.current, {
    //         scale: 200,
    //         x: '100%',
    //         y: '100%',
    //         backgroundColor: 'aquamarine',
    //     })
    //     .to(transitionRef.current, {
    //         duration: 1,
    //         x: '0%',
    //         y: '0%',
    //         rotation: 360,
    //         ease: 'power3.out',
    //     })
    //     .to(transitionRef.current, {
    //         duration: 1,
    //         scale: 0,
    //         ease: 'power3.out',
    //     });
    // }, []);

    return (
        <>
            <div className='work3Container'>

                <div className='work3Title'>
                    Elements
                </div>
                <div className='work3Image'>

                </div>
              
            </div>
        </>
    );
}

export default Work3