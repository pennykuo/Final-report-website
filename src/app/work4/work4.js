'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./work4.css"
function Work4() {
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
            <div className='work4Container'>
                <div className='work4Element1'>
                    <div className='work4Circle1'>

                    </div>
                    <div className='work4Image1'>

                    </div>
                    <div className='work4Title1'>
                        123123123
                    </div>
                    <div className='work4Content1'>
                        123123123
                    </div>
                </div>
                <div className='work4Element2'>
                    <div className='work4Circle2'>

                    </div>
                    <div className='work4Image2'>

                    </div>
                    <div className='work4Title2'>
                        123123123
                    </div>
                    <div className='work4Content2'>
                        123123123
                    </div>
                </div>

            </div>
        </>
    );
}

export default Work4