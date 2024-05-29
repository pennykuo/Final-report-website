'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./work7.css"
function work7() {
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
            <div className='work7Container'>
                <div className='work7Title'>
                    Scene
                </div>
                <div className='work7Content'>
                    <p>它緊湊地安裝在需要的地方，</p>
                    <br/>
                    <p>不僅可以在發生意外災難時使用，還可以在日常生活中使用</p>
                </div>
                <div className='work7Background'>


                </div>
            </div>
        </>
    );
}

export default work7