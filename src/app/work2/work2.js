'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./work2.css"
function Work2() {
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
            <div className='imageContainer'>
                <div className='image img1'>

                </div>
                <div className='image img2'>

                </div>
                <div className='image img3'>

                </div>
            </div>
        </>
    );
}

export default Work2