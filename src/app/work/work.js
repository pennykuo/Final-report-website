'use client'
import "./work.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

function Work() {
    AOS.init();
    // const transitionRef = useRef();
    // const router = useRouter();

    // const handleNextPageClick = () => {
    //     const tl = gsap.timeline({
    //         onComplete: () => router.push('/work2')
    //     });

    //     tl.set(transitionRef.current, {
    //         backgroundColor: 'aquamarine',
    //     })
    //         .to(transitionRef.current, {
    //             duration: 1,
    //             x: '50%',
    //             y: '50%',
    //             rotation: 360,
    //             ease: 'power3.out',
    //         })
    //         .to(transitionRef.current, {
    //             duration: 1,
    //             scale: 200,
    //             ease: 'power3.out',
    //         });
    // };

    return (
        <>
            <div>
                {/* <div className="transition" ref={transitionRef}>
                </div> */}

                <div className="workBack">
                    {/* <div className="workTitle" data-aos="fade-down-right">
                        <text className="workTextTitle">Body Worn Camera Automated Testing</text>
                    </div> */}

                    <div className="content" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className="workSubtitle">
                            <text className="workTextSubtitle">前言</text>
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

export default Work;