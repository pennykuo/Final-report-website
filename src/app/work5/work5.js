'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./work5.css"
function Work5() {
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
            <div className='work5Container'>

                <div className='work5Item1'>
                    <div className='work5Element work5Element1'>
                        <div className='work5Image work5Image1'>
                        </div>
                        <div className='work5Title work5Title1'>
                            123123123
                        </div>
                        <div className='work5Content work5Content1'>
                            123123123
                        </div>
                    </div>
                    <div className='work5Element work5Element2'>
                        <div className='work5Image work5Image2'>

                        </div>
                        <div className='work5Title work5Title2'>
                            123123123
                        </div>
                        <div className='work5Content work5Content2'>
                            123123123
                        </div>
                    </div>
                    <div className='work5Element work5Element3'>
                        <div className='work5Image work5Image3'>

                        </div>
                        <div className='work5Title work5Title3'>
                            123123123
                        </div>
                        <div className='work5Content work5Content3'>
                            123123123
                        </div>
                    </div>
                </div>
                <div className='work5Item2'>
                    <div className='work5Element work5Element4'>
                        <div className='work5Image work5Image4'>

                        </div>
                        <div className='work5Title work5Title4'>
                            123123123
                        </div>
                        <div className='work5Content work5Content4'>
                            123123123
                        </div>
                    </div>
                    <div className='work5Element work5Element5'>
                        <div className='work5Image work5Image5'>

                        </div>
                        <div className='work5Title work5Title5'>
                            123123123
                        </div>
                        <div className='work5Content work5Content5'>
                            123123123
                        </div>
                    </div>
                    <div className='work5Element work5Element6'>
                        <div className='work5Image work5Image6'>

                        </div>
                        <div className='work5Title work5Title6'>
                            123123123
                        </div>
                        <div className='work5Content work5Content6'>
                            123123123
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Work5